import { authClient } from '@/lib/auth-client'

export const loginWithGoogle = async () => {
	await authClient.signIn.social({ provider: 'google' })
}
export const loginWithGitHub = async () => {
	await authClient.signIn.social({ provider: 'github' })
}
