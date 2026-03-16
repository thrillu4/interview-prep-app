import SortingDropMenu from '@/components/coding/SortingDropMenu'
import { FieldSeparator } from '@/components/ui/field'
import {
	BadgeCheck,
	CodeXml,
	Search,
	SquareMousePointer,
	TestTubeDiagonal,
} from 'lucide-react'

const CodingProblems = async () => {
	return (
		<section className='mx-auto max-w-350 py-50'>
			<header className='space-y-10'>
				<div className='flex items-center gap-7'>
					<div className='border dark:border-neutral-600 p-5 bg-linear-to-b from-neutral-200 via-neutral-100 to-neutral-50 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 shadow-xl rounded-xl'>
						<CodeXml className='size-8  dark:text-main' />
					</div>
					<h1 className='text-5xl font-semibold tracking-tight'>
						All Coding Interview Problems
					</h1>
				</div>
				<h2 className='text-2xl max-w-4xl dark:text-neutral-300'>
					Most important JavaScript interview questions, from library APIs and
					utility functions to algorithms and UI components.
				</h2>
				<div className='flex items-center gap-10'>
					<div className='flex items-center gap-3 text-xl dark:text-neutral-300'>
						<BadgeCheck className='dark:text-main size-6' />
						Proven problems and solutions
					</div>
					<div className='flex items-center gap-3 text-xl dark:text-neutral-300'>
						<TestTubeDiagonal className='dark:text-main size-6' />
						Comprehensive test cases
					</div>
					<div className='flex items-center gap-3 text-xl dark:text-neutral-300'>
						<SquareMousePointer className='dark:text-main size-6' />
						Code in browser
					</div>
				</div>
				<FieldSeparator />
			</header>
			<section className='pt-10 pb-30 grid grid-cols-3 gap-x-15'>
				<div className='col-start-1 col-end-3'>
					<div className='flex items-center gap-5'>
						<div className='relative w-full'>
							<div className='absolute inset-y-0 left-0  pointer-events-none flex items-center pl-3'>
								<Search className='size-4 text-neutral-400 dark:text-neutral-600 ' />
							</div>
							<input
								type='search'
								name='search'
								id='search'
								className='pr-3 pl-9 border border-neutral-400 dark:border-neutral-700  rounded-sm py-1 text-sm w-full placeholder:text-neutral-400 dark:placeholder:text-neutral-600'
								placeholder='Quickly search the task you need '
							/>
						</div>
						<SortingDropMenu />
					</div>
				</div>
				<aside>filter</aside>
			</section>
			<FieldSeparator />
		</section>
	)
}

export default CodingProblems
