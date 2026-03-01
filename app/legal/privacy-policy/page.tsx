const page = () => {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-neutral-950 py-16 px-6'>
			<div className='max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-8 md:p-12'>
				<h1 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
					Privacy Policy
				</h1>

				<p className='text-sm text-gray-500 dark:text-gray-400 mb-8'>
					Last updated: March 1, 2026
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					1. Introduction
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					This Privacy Policy explains how this website collects, uses, and
					protects your information when you use the platform.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					2. Information We Collect
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-3'>
					We may collect the following types of information:
				</p>
				<ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6'>
					<li>Name and email address</li>
					<li>Authentication data (via third-party providers)</li>
					<li>Usage data such as pages visited and time spent</li>
					<li>IP address and browser information</li>
				</ul>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					3. How We Use Your Information
				</h2>
				<ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6'>
					<li>To provide and maintain the Service</li>
					<li>To authenticate users</li>
					<li>To improve functionality and user experience</li>
					<li>To ensure security and prevent abuse</li>
				</ul>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					4. Cookies
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					We may use cookies to keep you logged in and remember your
					preferences. You can disable cookies in your browser settings.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					5. Data Storage and Security
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					We take reasonable measures to protect your data. However, no system
					is completely secure, and we cannot guarantee absolute security.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					6. Third-Party Services
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					We may use third-party services such as authentication providers,
					database services, or analytics tools. These providers may process
					your data in accordance with their own privacy policies.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					7. Data Retention
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					We retain your information as long as your account exists or as
					necessary to comply with legal obligations.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					8. Your Rights
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					You may request access, correction, or deletion of your personal data
					by contacting us.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					9. Children&apos;s Privacy
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					This Service is not intended for children under the age of 13.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					10. Changes to This Policy
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
					We may update this Privacy Policy from time to time. Continued use of
					the Service means you accept the updated policy.
				</p>

				<h2 className='text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200'>
					11. Contact
				</h2>
				<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
					If you have questions about this Privacy Policy, contact:
					<br />
					<a href='mailto:iready-support@email.com' className='font-medium'>
						iready-support@email.com
					</a>
				</p>
			</div>
		</div>
	)
}

export default page
