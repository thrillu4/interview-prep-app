import z from 'zod'

export const SignUpFormSchema = z.object({
	name: z
		.string()
		.min(3, { error: 'Name must be at least 3 characters long!' }),
	email: z.email({ error: 'Please enter a valid email' }).trim(),
	password: z
		.string()
		.min(6, { error: 'Be at least 6 characters long' })
		.regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
		.regex(/[0-9]/, { error: 'Contain at least one number.' })
		.trim(),
})

export type FormState =
	| {
			errors?: {
				name?: string[]
				email?: string[]
				password?: string[]
			}
			values?: {
				name?: string
				email?: string
				password?: string
			}
			message?: string
	  }
	| undefined

export const SignInFormSchema = z.object({
	email: z.email({ error: 'Please enter a valid email' }).trim(),
	password: z
		.string()
		.min(6, { error: 'Be at least 6 characters long' })
		.trim(),
})
