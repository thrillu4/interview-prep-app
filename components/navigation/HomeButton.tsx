import { ROUTES } from '@/utils/routes'
import Image from 'next/image'
import Link from 'next/link'

const HomeButton = () => {
	return (
		<Link
			href={ROUTES.HOME}
			className='flex gap-3 items-center font-extrabold tracking-wide text-xl'
		>
			<Image src='/main.png' width={28} height={28} alt='main logo' />
			IReady
		</Link>
	)
}

export default HomeButton
