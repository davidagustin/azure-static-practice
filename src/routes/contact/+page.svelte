<script lang="ts">
	import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-svelte';

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;
	let submitSuccess = false;

	function handleSubmit() {
		isSubmitting = true;
		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			submitSuccess = true;
			formData = { name: '', email: '', subject: '', message: '' };
			// Reset success message after 5 seconds
			setTimeout(() => {
				submitSuccess = false;
			}, 5000);
		}, 2000);
	}
</script>

<svelte:head>
	<title>Contact Us - TechStore</title>
	<meta name="description" content="Get in touch with TechStore for support, inquiries, or feedback. We're here to help with all your computer hardware needs." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
		<p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
			We're here to help with all your computer hardware needs
		</p>
	</div>
</section>

<!-- Contact Information -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
				
				{#if submitSuccess}
					<div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
						<div class="flex">
							<div class="flex-shrink-0">
								<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
							</div>
							<div class="ml-3">
								<p class="text-sm font-medium text-green-800">
									Thank you! Your message has been sent successfully. We'll get back to you soon.
								</p>
							</div>
						</div>
					</div>
				{/if}

				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
								Full Name *
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="Enter your full name"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="Enter your email address"
							/>
						</div>
					</div>
					
					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
							Subject *
						</label>
						<input
							type="text"
							id="subject"
							bind:value={formData.subject}
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
							placeholder="What is this regarding?"
						/>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="6"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
							placeholder="Tell us how we can help you..."
						></textarea>
					</div>
					
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
					>
						{#if isSubmitting}
							<div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
							<span>Sending...</span>
						{:else}
							<Send class="h-5 w-5" />
							<span>Send Message</span>
						{/if}
					</button>
				</form>
			</div>

			<!-- Contact Information -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
				
				<div class="space-y-8">
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
								<Mail class="h-6 w-6 text-primary-600" />
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
							<p class="text-gray-600 mb-2">For general inquiries and support:</p>
							<a href="mailto:support@techstore.com" class="text-primary-600 hover:text-primary-700 font-medium">
								support@techstore.com
							</a>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
								<Phone class="h-6 w-6 text-accent-600" />
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
							<p class="text-gray-600 mb-2">Call us for immediate assistance:</p>
							<a href="tel:+1-800-TECHSTORE" class="text-primary-600 hover:text-primary-700 font-medium">
								+1 (800) TECH-STORE
							</a>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
								<MapPin class="h-6 w-6 text-green-600" />
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-2">Visit Our Store</h3>
							<p class="text-gray-600">
								123 Tech Street<br />
								Silicon Valley, CA 94025<br />
								United States
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
								<Clock class="h-6 w-6 text-blue-600" />
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
							<div class="text-gray-600 space-y-1">
								<p><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM PST</p>
								<p><strong>Saturday:</strong> 10:00 AM - 6:00 PM PST</p>
								<p><strong>Sunday:</strong> 11:00 AM - 5:00 PM PST</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Live Chat -->
				<div class="mt-12 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
					<div class="flex items-center space-x-4 mb-4">
						<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<MessageSquare class="h-6 w-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Live Chat</h3>
							<p class="text-gray-600">Get instant help from our experts</p>
						</div>
					</div>
					<button class="btn btn-primary w-full">
						Start Live Chat
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
			<p class="text-lg text-gray-600">
				Find quick answers to common questions about our products and services
			</p>
		</div>

		<div class="space-y-6">
			<div class="bg-white rounded-lg shadow-sm p-6">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					What is your return policy?
				</h3>
				<p class="text-gray-600">
					We offer a 30-day return policy for all products in their original condition. If you're not satisfied with your purchase, you can return it for a full refund or exchange.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-sm p-6">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					Do you offer technical support?
				</h3>
				<p class="text-gray-600">
					Yes! Our technical support team is available 24/7 to help you with product selection, compatibility issues, and troubleshooting. Contact us via phone, email, or live chat.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-sm p-6">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					How long does shipping take?
				</h3>
				<p class="text-gray-600">
					Standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days. We also offer same-day pickup at our store location.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-sm p-6">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					Do you offer warranty on products?
				</h3>
				<p class="text-gray-600">
					All our products come with manufacturer warranties. Additionally, we offer extended warranty options for additional protection and peace of mind.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-sm p-6">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					Can you help me build a custom PC?
				</h3>
				<p class="text-gray-600">
					Absolutely! Our expert team can help you design and build a custom PC tailored to your specific needs and budget. Contact us for a consultation.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Find Our Store</h2>
			<p class="text-lg text-gray-600">
				Visit us in person for hands-on product demonstrations and expert advice
			</p>
		</div>
		
		<div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
			<div class="text-center">
				<MapPin class="h-16 w-16 text-gray-400 mx-auto mb-4" />
				<p class="text-gray-600 text-lg">Interactive Map Coming Soon</p>
				<p class="text-gray-500">123 Tech Street, Silicon Valley, CA 94025</p>
			</div>
		</div>
	</div>
</section> 