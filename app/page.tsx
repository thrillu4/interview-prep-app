import DescriptionSection from '@/components/home/DescriptionSection'
import FeatureSection from '@/components/home/FeatureSection'
import PromoSection from '@/components/home/PromoSection'
import QuestionSection from '@/components/home/QuestionSection'
import WorkSpace from '@/components/home/WorkSpace'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/utils/routes'
import Link from 'next/link'

const Home = async () => {
	return (
		<main className='pt-50 pb-30 space-y-20'>
			<PromoSection />
			<WorkSpace />
			<FeatureSection />
			<DescriptionSection />
			<QuestionSection />
			<div className='pt-20 flex items-center justify-between max-w-7xl mx-auto'>
				<h4 className='text-5xl font-medium'>
					Your dream job is absolutely worth it
				</h4>
				<div className='space-y-3 text-right'>
					<Button className='bg-main inline-flex cursor-pointer hover:bg-main/60 dark:hover:bg-main/90 items-center text-black   gap-2 rounded-full py-6  text-lg '>
						<Link href={ROUTES.GET_STARTED}>Get started now</Link>
					</Button>
					<div className='text-xs dark:text-neutral-400'>
						200+ questions are free to do
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
