import { BookOpen, Clock } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const DescriptionSection = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 my-50'>
			<div className='max-w-3xl space-y-10'>
				<h2 className='text-5xl font-medium'>
					A practice question bank with everything you&apos;d ever need
				</h2>
				<h3 className='text-xl dark:text-neutral-400'>
					We have questions in every critical topic, interview format and
					framework / language. Every question comes with solutions and test
					cases.
				</h3>
			</div>
			<Tabs defaultValue='topics' className='my-16 '>
				<TabsList
					variant='line'
					className='mb-4 flex w-full justify-between items-center'
				>
					<div>
						<TabsTrigger
							className='cursor-pointer dark:hover:text-main'
							value='topics'
						>
							Topics
						</TabsTrigger>
						<TabsTrigger
							className='cursor-pointer dark:hover:text-main'
							value='language'
						>
							Framework / language
						</TabsTrigger>
						<TabsTrigger
							className='cursor-pointer dark:hover:text-main'
							value='format'
						>
							Format
						</TabsTrigger>
					</div>
					<div className='flex items-center gap-10'>
						<div className='flex items-center gap-2 text-sm dark:text-neutral-400'>
							<BookOpen />
							44 questions
						</div>
						<div className='flex items-center gap-2 text-sm dark:text-neutral-400'>
							<Clock />
							11 hours total
						</div>
					</div>
				</TabsList>
				<TabsContent value='topics'>
					Here will be questions by topic
				</TabsContent>
				<TabsContent value='language'>
					Here will be questions by selected language
				</TabsContent>
				<TabsContent value='format'>
					Here will be questions by format
				</TabsContent>
			</Tabs>
		</section>
	)
}

export default DescriptionSection
