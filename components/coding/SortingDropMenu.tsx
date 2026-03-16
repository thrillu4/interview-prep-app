'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ArrowDownNarrowWide } from 'lucide-react'
import { useState } from 'react'

type Variants = 'def' | 'a-z' | 'z-a' | 'easy' | 'hard' | 'new' | 'old'
interface SortVariant {
	title: string
	state: Variants
}
const sortVariants: SortVariant[] = [
	{ title: 'Default', state: 'def' },
	{ title: 'Time: A to Z', state: 'a-z' },
	{ title: 'Time: Z to A', state: 'z-a' },
	{ title: 'Difficulty: Easy to Hard', state: 'easy' },
	{ title: 'Difficulty: Hard to Easy', state: 'hard' },
	{ title: 'Created: Newest to Oldest', state: 'new' },
	{ title: 'Created: Oldest to Newest', state: 'old' },
]

const SortingDropMenu = () => {
	const [variant, setVariant] = useState<Variants>('def')
	const handleVarChange = (prop: Variants) => setVariant(prop)
	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className={`rounded-2xl cursor-pointer ${variant === 'def' ? 'text-black bg-white dark:bg-black dark:text-white' : 'bg-black text-white dark:bg-white dark:text-black dark:hover:text-white'}`}
				>
					<ArrowDownNarrowWide /> Sort by
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{sortVariants.map(({ state, title }) => (
					<DropdownMenuItem
						key={state}
						onClick={() => handleVarChange(state)}
						className={variant === state ? 'font-bold dark:text-main' : ''}
					>
						{title}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default SortingDropMenu
