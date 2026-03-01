'use client'

import { Button } from '@/components/ui/button'
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { signIn } from '@/services/auth.actions'
import {
	loginWithGitHub,
	loginWithGoogle,
} from '@/services/authClient.functions'
import { ROUTES } from '@/utils/routes'
import { GalleryVerticalEnd } from 'lucide-react'
import Link from 'next/link'
import { useActionState } from 'react'

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	const [state, action, pending] = useActionState(signIn, undefined)

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<form action={action}>
				<FieldGroup>
					<div className='flex flex-col items-center gap-2 text-center'>
						<a
							href='#'
							className='flex flex-col items-center gap-2 font-medium'
						>
							<div className='flex size-8 items-center justify-center rounded-md'>
								<GalleryVerticalEnd className='size-7' />
							</div>
						</a>
						<h1 className='text-xl font-bold'>Sign in to your account</h1>
						<FieldDescription>
							Don&apos;t have an account?{' '}
							<Link href={ROUTES.SIGN_UP}>Sign up</Link>
						</FieldDescription>
					</div>
					<Field>
						<FieldLabel htmlFor='email'>Email</FieldLabel>
						<Input
							id='email'
							type='email'
							name='email'
							placeholder='anna@example.com'
							defaultValue={state?.values?.email || ''}
							required
						/>
						{state?.errors?.email && (
							<p className='text-red-500'>{state.errors.email[0]}</p>
						)}
					</Field>
					<Field>
						<FieldLabel htmlFor='password'>Password</FieldLabel>
						<Input
							id='password'
							type='password'
							name='password'
							placeholder='*********'
							defaultValue={state?.values?.password || ''}
							required
						/>
						{state?.errors?.password && (
							<p className='text-red-500'>{state.errors.password[0]}</p>
						)}
					</Field>
					{state?.message && <p className='text-red-500'>{state.message}</p>}
					<Field>
						<Button type='submit' disabled={pending}>
							{pending ? 'Signing In...' : 'Sign In'}
						</Button>
					</Field>
					<FieldSeparator>Or</FieldSeparator>
					<Field className='grid gap-4 sm:grid-cols-2'>
						<Button variant='outline' type='button' onClick={loginWithGitHub}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='800px'
								height='800px'
								viewBox='0 0 15 15'
								fill='none'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z'
									fill='#000000'
								/>
							</svg>
							Continue with GitHub
						</Button>
						<Button variant='outline' type='button' onClick={loginWithGoogle}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path
									d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
									fill='currentColor'
								/>
							</svg>
							Continue with Google
						</Button>
					</Field>
				</FieldGroup>
			</form>
			<FieldDescription className='px-6 text-center'>
				By clicking continue, you agree to our{' '}
				<Link href={ROUTES.TERMS}>Terms of Service</Link> and{' '}
				<Link href={ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>.
			</FieldDescription>
		</div>
	)
}
