import FeatureSection from '@/components/home/FeatureSection'
import PromoSection from '@/components/home/PromoSection'
import WorkSpace from '@/components/home/WorkSpace'

const Home = async () => {
	return (
		<main className='pt-50 pb-30 space-y-20'>
			<PromoSection />
			<WorkSpace />
			<FeatureSection />
		</main>
	)
}

export default Home
