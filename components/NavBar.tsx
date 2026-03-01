import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { auth } from '@/lib/auth'
import { ROUTES } from '@/utils/routes'
import { SettingsIcon, User, UserIcon } from 'lucide-react'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import SignOutButton from './SignOutButton'
import { ModeToggle } from './theme/ThemeButtonToggle'

const NavBar = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	})
	return (
		<nav className='flex justify-between items-center font-extrabold tracking-wide text-lg px-6 py-3'>
			<div className='flex items-center'>
				<Link href={ROUTES.HOME} className='flex gap-3 items-center'>
					<Image src='/main.png' width={28} height={28} alt='main logo' />
					IReady
				</Link>
			</div>
			<div className='font-medium flex items-center gap-4'>
				<ModeToggle />
				{session ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild className='cursor-pointer'>
							{session.user.image ? (
								<Image
									src={session.user.image}
									alt='avatar'
									width={34}
									height={34}
									className='rounded-full'
								/>
							) : (
								<div className='rounded-full p-1.5 border-2 hover:bg-stone-100 dark:hover:bg-stone-900/50  dark:border-stone-700 dark:bg-stone-900  '>
									<User size='22' />
								</div>
							)}
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<div className='px-3 py-1 font-semibold'>{session.user.name}</div>
							<DropdownMenuSeparator />
							<Link href={ROUTES.PROFILE}>
								<DropdownMenuItem className='cursor-pointer'>
									<UserIcon />
									Profile
								</DropdownMenuItem>
							</Link>

							<Link href={ROUTES.SETTINGS}>
								<DropdownMenuItem className='cursor-pointer'>
									<SettingsIcon />
									Settings
								</DropdownMenuItem>
							</Link>
							<DropdownMenuSeparator />
							<SignOutButton />
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<div className='space-x-2'>
						<Link
							className='cursor-pointer hover:underline transition-all duration-200 dark:hover:text-main  '
							href={ROUTES.LOG_IN}
						>
							Sign In
						</Link>
						<span>/</span>
						<Link
							className='cursor-pointer hover:underline transition-all duration-200 dark:hover:text-main '
							href={ROUTES.SIGN_UP}
						>
							Sign Up
						</Link>
					</div>
				)}
			</div>
		</nav>
	)
}

export default NavBar
