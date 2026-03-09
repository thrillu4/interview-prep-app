import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { navTabs } from '@/utils/constants'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const NavMenu = () => {
	return (
		<NavigationMenu>
			{navTabs.map((tab) => {
				if (tab.sections && tab.sections.length > 0) {
					return (
						<NavigationMenuList key={tab.title}>
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-lg font-bold'>
									{tab.title}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='min-w-170 space-y-5 p-5'>
										{tab.sections.map((section) => (
											<li key={section.title}>
												<Link
													href={section.href}
													className='grid grid-cols-[auto_1fr_auto] gap-8 items-center rounded-2xl p-4 border border-transparent dark:hover:border-neutral-500 dark:hover:bg-neutral-700 hover:bg-stone-50 hover:border-stone-100'
												>
													<div>
														<div className=' bg-white rounded-full p-3'>
															<Image
																src={section.icon}
																alt={section.title}
																width={40}
																height={40}
															/>
														</div>
													</div>
													<div className='space-y-3'>
														<h3 className='font-bold text-lg'>
															{section.title}
														</h3>
														<p className='text-sm opacity-80'>
															{section.descriptions}
														</p>
														<div className='flex items-center gap-2'>
															{section.badges?.map((b, i) => (
																<div
																	key={i}
																	className='bg-stone-600 text-white py-1 px-2 rounded-4xl text-xs'
																>
																	{b}
																</div>
															))}
														</div>
													</div>
													<ArrowRight />
												</Link>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					)
				} else {
					return (
						<Link
							href={tab.href}
							key={tab.title}
							className='text-lg font-bold py-2 px-4'
						>
							{tab.title}
						</Link>
					)
				}
			})}
		</NavigationMenu>
	)
}

export default NavMenu
