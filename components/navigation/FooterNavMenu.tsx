import { ROUTES } from '@/utils/routes'
import Link from 'next/link'
import { Button } from '../ui/button'
import HomeButton from './HomeButton'

const FooterNavMenu = () => {
	return (
		<nav className='grid grid-cols-5 w-full'>
			<div className='col-start-1 col-end-3'>
				<HomeButton />
				<form className='mt-15 w-[80%]'>
					<label className='text-xl block mb-4 text-gray-500' htmlFor='email'>
						Contact us:
					</label>
					<textarea
						name='email'
						id='email'
						placeholder="We'll be happy to help you with any question..."
						className='border-2 dark:bg-neutral-900 resize-none w-full min-h-28 p-2'
						maxLength={400}
					/>
					<Button variant={'outline'} disabled type='submit'>
						Submit
					</Button>
				</form>
			</div>
			<div>
				<h3 className='text-lg font-bold'>Practice</h3>
				<ul className='pt-5 text-gray-500 text-lg space-y-2'>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.GET_STARTED}>Get Started</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.QUESTIONS}>All practice questions</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>All coding problems</Link>
					</li>
				</ul>
			</div>
			<div>
				<h3 className='text-lg font-bold'>Questions</h3>
				<ul className='pt-5 text-gray-500 text-lg space-y-2'>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.QUESTIONS}>JavaScript</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.QUESTIONS}>React</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.QUESTIONS}>TypeScript</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.QUESTIONS}>HTML</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.QUESTIONS}>CSS</Link>
					</li>
				</ul>
			</div>
			<div>
				<h3 className='text-lg font-bold'>Coding Problems</h3>
				<ul className='pt-5 text-gray-500 text-lg space-y-2'>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>JS functions</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>Algorithms</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>UI tasks</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>Strings</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>Arrays</Link>
					</li>
					<li className='hover:underline transition-all duration-200 dark:hover:text-main'>
						<Link href={ROUTES.CODING_PROBLEMS}>Objects</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default FooterNavMenu
