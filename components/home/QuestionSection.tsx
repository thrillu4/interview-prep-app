import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const QuestionSection = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 mt-50 '>
			<div>
				<h2 className='text-5xl font-medium mb-24'>
					Your commonly asked questions, answered
				</h2>
				<h3></h3>
			</div>
			<Accordion type='multiple'>
				<AccordionItem value='item-1'>
					<AccordionTrigger className='text-xl cursor-pointer dark:text-neutral-300 py-10'>
						What is IReady site for?
					</AccordionTrigger>
					<AccordionContent className='text-lg space-y-3 font-medium dark:text-neutral-300 pb-10'>
						<p>
							This website helps developers prepare for technical interviews. It
							provides structured practice with common interview questions in
							topics like JavaScript, React, TypeScript, HTML, and system
							design.
						</p>
						<p>
							The goal is to help developers improve their knowledge, practice
							explaining concepts clearly, and feel more confident during real
							interviews.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger className='text-xl cursor-pointer dark:text-neutral-300 py-10'>
						What makes this platform different?
					</AccordionTrigger>
					<AccordionContent className='text-lg space-y-3 font-medium dark:text-neutral-300 pb-10'>
						<p>
							Unlike simple lists of interview questions, this platform focuses
							on active learning.
						</p>
						<p>
							Users can practice questions, save answers, track progress, and
							review topics in a structured way. The goal is not only to
							memorize answers but to truly understand the concepts behind them.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger className='text-xl cursor-pointer dark:text-neutral-300 py-10'>
						What topics are covered?
					</AccordionTrigger>
					<AccordionContent className='text-lg space-y-3 font-medium dark:text-neutral-300 pb-10'>
						<p>
							The platform focuses on essential frontend development topics such
							as JavaScript, React, TypeScript, HTML, CSS, browser APIs, and
							basic system design.
						</p>
						<p>
							Each topic contains curated questions that frequently appear in
							real technical interviews.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4'>
					<AccordionTrigger className='text-xl cursor-pointer dark:text-neutral-300 py-10'>
						How can this help me prepare for interviews?
					</AccordionTrigger>
					<AccordionContent className='text-lg space-y-3 font-medium dark:text-neutral-300 pb-10'>
						<p>
							Practicing interview questions regularly helps you organize your
							knowledge and improve the way you explain technical concepts.
						</p>
						<p>
							This platform allows you to review questions, write your own
							answers, and revisit topics that need improvement.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-5'>
					<AccordionTrigger className='text-xl cursor-pointer dark:text-neutral-300 py-10'>
						Can I track my progress?
					</AccordionTrigger>
					<AccordionContent className='text-lg space-y-3 font-medium dark:text-neutral-300 pb-10'>
						<p>
							Yes. Registered users can track which questions they have
							practiced, review previous answers, and monitor their learning
							progress over time.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	)
}

export default QuestionSection
