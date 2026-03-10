import { ROUTES } from '@/utils/routes'
import Link from 'next/link'
import FooterNavMenu from './FooterNavMenu'

const Footer = () => {
	return (
		<div className='border-t-4 border-stone-100 dark:border-stone-900'>
			<footer className='max-w-7xl mx-auto pt-24 pb-14 px-6 space-y-6 '>
				<FooterNavMenu />
				<div className='mt-50 flex items-center justify-between'>
					<div className='flex items-center gap-8'>
						<a href='https://github.com/thrillu4' target='_blank'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								shapeRendering='geometricPrecision'
								textRendering='geometricPrecision'
								imageRendering='optimizeQuality'
								fillRule='evenodd'
								clipRule='evenodd'
								viewBox='0 0 512 499.368'
								fill='#000'
								className='size-8 dark:fill-white dark:hover:fill-main hover:fill-stone-600'
							>
								<path
									fillRule='nonzero'
									d='M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z'
								/>
							</svg>
						</a>
						<a
							href='https://www.linkedin.com/in/denis-kraevoy/'
							target='_blank'
						>
							<svg
								className='size-8 dark:fill-white dark:hover:fill-main hover:fill-stone-600'
								fill='#000000'
								height='200px'
								width='200px'
								version='1.1'
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 504.4 504.4'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									<g>
										<g>
											<path d='M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6 C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8 c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6 c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z'></path>
										</g>
									</g>
								</g>
							</svg>
						</a>
						<a href='https://t.me/real_thrill' target='_blank'>
							<svg
								fill='#000000'
								className='size-9 dark:fill-white dark:hover:fill-main hover:fill-stone-600'
								viewBox='0 0 24 24'
								id='Layer_1'
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									<title>Telegram Glyph</title>
									<path d='M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z'></path>
								</g>
							</svg>
						</a>
					</div>
					<div className='flex items-center justify-between max-w-3xl w-full'>
						<div>&copy; 2026 PrepInt I. All right reserved.</div>
						<div className='size-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600' />
						<Link
							className='hover:underline dark:hover:text-main transition-all duration-200'
							href={ROUTES.PRIVACY_POLICY}
						>
							Privacy Policy
						</Link>
						<div className='size-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600' />
						<Link
							className='hover:underline dark:hover:text-main transition-all duration-200'
							href={ROUTES.TERMS}
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
