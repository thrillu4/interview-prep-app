import { NavTab } from '@/types'
import { ROUTES } from './routes'

export const navTabs: NavTab[] = [
	{
		title: 'Get Started',
		href: ROUTES.GET_STARTED,
	},
	{
		title: 'Questions',
		href: ROUTES.QUESTIONS,
		icon: '/tech-icons/q.png',
		sections: [
			{
				title: 'JavaScript',
				href: `${ROUTES.QUESTIONS}/javascript`,
				descriptions:
					'100+ most important JavaScript interview questions, from library APIs and utility functions to algorithms and UI components.',
				icon: '/tech-logos/js.png',
				badges: ['Strings', 'Functions', 'Promises', 'Arrays', 'Objects'],
			},
			{
				title: 'React',
				href: `${ROUTES.QUESTIONS}/react`,
				descriptions:
					'40+ most important React interview questions on component architecture, hooks, state management, performance, and real-world UI components.',
				icon: '/tech-logos/react.png',
				badges: ['Hooks', 'Async', 'Accessibility', 'Life Cycle'],
			},
			{
				title: 'TypeScript',
				href: `${ROUTES.QUESTIONS}/typescript`,
				descriptions:
					'80+ most important TypeScript interview questions on library APIs, utility types, algorithms, and building strong, typed components.',
				icon: '/tech-logos/ts.png',
				badges: ['Interfaces', 'Generics', 'Promises', 'Arrays', 'Types'],
			},
		],
	},
	{
		title: 'Coding Problems',
		href: ROUTES.CODING_PROBLEMS,
		icon: '/tech-icons/coding.png',
		sections: [
			{
				title: 'JS functions',
				href: `${ROUTES.CODING_PROBLEMS}/functions`,
				descriptions: 'The collections of JS coding problems for interview',
				icon: '/tech-logos/func.png',
				badges: ['Array', 'Object', 'String', 'Promise'],
			},
			{
				title: 'Algorithms',
				href: `${ROUTES.CODING_PROBLEMS}/algorithms`,
				descriptions: 'The most popular algorithms problems',
				icon: '/tech-logos/algorithms.png',
				badges: [
					'Binary Search',
					'Recursion',
					'BFS',
					'Dynamic Programming',
					'DFS',
				],
			},
			{
				title: 'UI problems',
				href: `${ROUTES.CODING_PROBLEMS}/ui-problems`,
				descriptions:
					'The complex collection of user interface coding problems based on frameworks and program languages',
				icon: '/tech-logos/ui.png',
				badges: [
					'React',
					'JavaScript',
					'CSS',
					'Architecture',
					'TypeScript',
					'HTML',
				],
			},
		],
	},
	{
		title: 'Mock Interview',
		href: ROUTES.MOCK_INTERVIEW,
	},
]
