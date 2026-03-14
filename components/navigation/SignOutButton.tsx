'use client'

import { authClient } from '@/lib/auth-client'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DropdownMenuItem } from '../ui/dropdown-menu'

const SignOutButton = () => {
	const router = useRouter()
	const handleSignOut = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.refresh()
				},
			},
		})
	}
	return (
		<DropdownMenuItem
			variant='destructive'
			className='cursor-pointer'
			onClick={handleSignOut}
		>
			<LogOutIcon />
			Log out
		</DropdownMenuItem>
	)
}

export default SignOutButton
