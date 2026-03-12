import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ROUTES } from '@/utils/routes'
import { Lock } from 'lucide-react'
import Link from 'next/link'

const WorkSpace = () => {
	return (
		<Tabs defaultValue='ui' className='w-[76vw] mx-auto px-4'>
			<div className='rounded-xl  bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-white/10 shadow-2xl'>
				<div className='grid w-full grid-cols-[3rem_1fr_3rem] items-center px-4 py-2'>
					<div className='flex items-center gap-x-2'>
						<div className='size-3 rounded-full bg-neutral-300 dark:bg-white/15' />
						<div className='size-3 rounded-full bg-neutral-300 dark:bg-white/15' />
						<div className='size-3 rounded-full bg-neutral-300 dark:bg-white/15' />
					</div>
					<div className='flex items-center  justify-center'>
						<div className='flex items-center gap-2 justify-center text-neutral-700 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-500 rounded-xl py-1 w-1/2'>
							<Lock className='size-4' /> iready.com
						</div>
					</div>
				</div>
				<TabsContent
					value='ui'
					className='border border-neutral-300 dark:border-transparent  rounded-lg h-[65vh] m-3'
				>
					WILL BE CODE PLATFORM WITH UI PROBLEM
				</TabsContent>
				<TabsContent
					value='func'
					className='border border-neutral-300 dark:border-transparent  rounded-lg h-[65vh] m-3'
				>
					WILL BE CODE PLATFORM WITH JAVASCRIPT FUNCTIONS
				</TabsContent>
				<TabsContent
					value='quiz'
					className='border border-neutral-300 dark:border-transparent  rounded-lg h-[65vh] m-3'
				>
					WILL BE CODE PLATFORM WITH QUIZ
				</TabsContent>
				<Link
					href={ROUTES.CODING_PROBLEMS}
					className='flex justify-center py-1 font-semibold text-gray-700 items-center bg-main cursor-pointer text-sm rounded-b-xl'
				>
					Click here to try out the actual workspace
				</Link>
			</div>
			<TabsList className='w-[70%] mx-auto flex items-center justify-center gap-5 mt-10'>
				<TabsTrigger value='ui' className='cursor-pointer dark:hover:text-main'>
					UI Component
				</TabsTrigger>
				<TabsTrigger
					value='func'
					className='cursor-pointer dark:hover:text-main '
				>
					JavaScript Functions
				</TabsTrigger>
				<TabsTrigger
					value='quiz'
					className='cursor-pointer dark:hover:text-main'
				>
					Quiz
				</TabsTrigger>
			</TabsList>
		</Tabs>
	)
}

export default WorkSpace
