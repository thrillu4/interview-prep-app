export interface NavSection {
	icon: string
	title: string
	href: string
	descriptions: string
	badges?: string[]
}

export interface NavTab {
	title: string
	href: string
	icon?: string
	sections?: NavSection[]
}
