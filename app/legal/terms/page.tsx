const page = () => {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-neutral-950 py-16 px-6'>
			<div className='max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-8 md:p-12'>
				<h1 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
					Terms of Service
				</h1>

				<p className='text-sm text-gray-500 dark:text-gray-400 mb-8'>
					Last updated: March 1, 2026
				</p>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						1. Acceptance of Terms
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						By accessing or using this website, you agree to be bound by these
						Terms of Service. If you do not agree, you may not use the Service.
					</div>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						2. Description of Service
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						This platform provides tools for interview preparation, learning,
						and progress tracking. We reserve the right to modify or discontinue
						the Service at any time.
					</div>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						3. User Accounts
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						To access certain features, you must create an account. You agree
						to:
						<ul className='list-disc list-inside mt-3 space-y-2'>
							<li>Provide accurate information</li>
							<li>Keep your credentials secure</li>
							<li>Be responsible for activity under your account</li>
						</ul>
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						4. Acceptable Use
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						You agree not to:
						<ul className='list-disc list-inside mt-3 space-y-2'>
							<li>Use the Service for unlawful purposes</li>
							<li>Attempt to disrupt or hack the platform</li>
							<li>Access other users’ accounts without permission</li>
							<li>Upload malicious code</li>
						</ul>
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						5. Intellectual Property
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						All content, design, and software are owned by the platform unless
						otherwise stated. You may not copy or distribute content without
						permission.
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						6. Termination
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						We may suspend or terminate your access if you violate these Terms.
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						7. Disclaimer
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						The Service is provided as IReady.com without warranties of any
						kind. We do not guarantee uninterrupted or error-free operation.
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						8. Limitation of Liability
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						We are not liable for indirect damages, data loss, or loss of
						profits resulting from the use of the Service.
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						9. Changes to Terms
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						We may update these Terms at any time. Continued use of the Service
						means you accept the revised Terms.
					</div>
				</section>
				<section className='mb-8'>
					<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
						10. Contact
					</h2>
					<div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-2'>
						If you have questions about these Terms, contact us at:
						<br />
						<a href='mailto:iready-support@email.com' className='font-medium'>
							iready-support@email.com
						</a>
					</div>
				</section>
			</div>
		</div>
	)
}

export default page
