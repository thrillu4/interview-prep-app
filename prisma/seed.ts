import { prisma } from '@/lib/prisma'
import { Difficulty } from '@/types'

async function main() {
	console.log('Seeding database...')

	// Clean existing problems
	await prisma.problem.deleteMany()
	await prisma.tag.deleteMany()

	/*
  -------------------------
  Create Tags
  -------------------------
  */

	const arrayTag = await prisma.tag.create({
		data: { name: 'Array' },
	})

	const functionTag = await prisma.tag.create({
		data: { name: 'Functions' },
	})

	const eventTag = await prisma.tag.create({
		data: { name: 'Events' },
	})

	/*
  -------------------------
  Problem 1
  -------------------------
  */

	const sumProblem = await prisma.problem.create({
		data: {
			slug: 'sum-two-numbers',
			title: 'Sum Two Numbers',
			description: `
Write a function **sum(a, b)** that returns the sum of two numbers.

Example:
sum(1,2) -> 3
`,
			difficulty: Difficulty.EASY,
			functionName: 'sum',
			starterCode: `function sum(a, b) {
  // write your code here
}`,
			tags: {
				create: [{ tagId: functionTag.id }],
			},
			tests: {
				create: [
					{
						input: [1, 2],
						output: 3,
					},
					{
						input: [5, 5],
						output: 10,
					},
					{
						input: [-1, 1],
						output: 0,
					},
					{
						input: [100, 200],
						output: 300,
						hidden: true,
					},
				],
			},
		},
	})

	/*
  -------------------------
  Problem 2
  -------------------------
  */

	const reverseArray = await prisma.problem.create({
		data: {
			slug: 'reverse-array',
			title: 'Reverse Array',
			description: `
Write a function **reverseArray(arr)** that returns the array reversed.

Example:
reverseArray([1,2,3]) -> [3,2,1]
`,
			difficulty: Difficulty.EASY,
			functionName: 'reverseArray',
			starterCode: `function reverseArray(arr) {
  // your code here
}`,
			tags: {
				create: [{ tagId: arrayTag.id }],
			},
			tests: {
				create: [
					{
						input: [[1, 2, 3]],
						output: [3, 2, 1],
					},
					{
						input: [['a', 'b', 'c']],
						output: ['c', 'b', 'a'],
					},
					{
						input: [[5]],
						output: [5],
					},
					{
						input: [[1, 2, 3, 4, 5]],
						output: [5, 4, 3, 2, 1],
						hidden: true,
					},
				],
			},
		},
	})

	/*
  -------------------------
  Problem 3
  -------------------------
  */

	const eventEmitter = await prisma.problem.create({
		data: {
			slug: 'event-emitter',
			title: 'Event Emitter',
			description: `
Implement a simple EventEmitter class.

Methods:

subscribe(eventName, callback)

emit(eventName, ...args)
`,
			difficulty: Difficulty.MEDIUM,
			functionName: 'EventEmitter',
			starterCode: `class EventEmitter {
  constructor() {
    
  }

  subscribe(eventName, callback) {

  }

  emit(eventName, ...args) {

  }
}`,
			tags: {
				create: [{ tagId: eventTag.id }],
			},
			tests: {
				create: [
					{
						input: ['basic'],
						output: true,
					},
				],
			},
		},
	})

	console.log('Seed completed')
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
