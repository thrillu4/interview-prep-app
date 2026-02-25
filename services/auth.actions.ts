'use server'

import { auth } from '@/lib/auth'
import { FormState, SignUpFormSchema } from '@/types/zod.schemas'
import { redirect } from 'next/navigation'

export const signIn = async (formData: FormData) => {}

export const signUp = async (state: FormState, formData: FormData) => {
	const raw = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const validatedFields = SignUpFormSchema.safeParse(raw)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			values: raw,
		}
	}

	const { email, name, password } = validatedFields.data

	try {
		const response = await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
			},
			asResponse: true,
		})

		if (!response.ok) {
			const data = await response.json()
			return {
				message: data.message,
				values: raw,
			}
		}
	} catch (error) {
		console.log(error)
		return {
			message: 'Something went wrong, please try again later',
			values: raw,
		}
	}
	redirect('/')
}

export const logout = async () => {}
