'use client'

import { MonitorCloud, Moon, MoonIcon, Sun, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu modal={false}>
			<HoverCard>
				<HoverCardTrigger>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							size='icon-lg'
							className='rounded-full cursor-pointer'
						>
							<Sun className='size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
							<Moon className='absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
							<span className='sr-only'>Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
				</HoverCardTrigger>
				<HoverCardContent className='w-max text-sm'>Theme</HoverCardContent>
			</HoverCard>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					onClick={() => setTheme('light')}
					className='dark:hover:text-main cursor-pointer transition-all duration-200 text-xl '
				>
					<SunIcon className='size-6 dark:hover:text-main ' /> Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
					className='dark:hover:text-main cursor-pointer transition-all duration-200 text-xl'
				>
					<MoonIcon className='size-6 dark:hover:text-main' />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('system')}
					className='dark:hover:text-main cursor-pointer transition-all duration-200 text-xl'
				>
					<MonitorCloud className='size-6 dark:hover:text-main' />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
