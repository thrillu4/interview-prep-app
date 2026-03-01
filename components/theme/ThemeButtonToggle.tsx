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
		<DropdownMenu>
			<HoverCard>
				<HoverCardTrigger>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='rounded-full cursor-pointer'
						>
							<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
							<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
							<span className='sr-only'>Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
				</HoverCardTrigger>
				<HoverCardContent className='w-max text-sm'>Theme</HoverCardContent>
			</HoverCard>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					onClick={() => setTheme('light')}
					className='hover:text-main cursor-pointer transition-all duration-200'
				>
					<SunIcon /> Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
					className='hover:text-main cursor-pointer transition-all duration-200'
				>
					<MoonIcon />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('system')}
					className='hover:text-main cursor-pointer transition-all duration-200'
				>
					<MonitorCloud />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
