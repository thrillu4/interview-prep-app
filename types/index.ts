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

export enum Difficulty {
	EASY = 'EASY',
	MEDIUM = 'MEDIUM',
	HARD = 'HARD',
}

export enum SubmissionStatus {
	PASSED = 'PASSED',
	FAILED = 'FAILED',
	ERROR = 'ERROR',
}
