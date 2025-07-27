<script lang="ts">
	import { HelpCircle, MessageSquare, Phone, Mail, BookOpen, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Support - TechStore</title>
	<meta name="description" content="Get help and support for your TechStore experience. Find answers to common questions and contact our support team." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-6xl font-bold mb-6">Support Center</h1>
		<p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
			We're here to help with all your questions and concerns
		</p>
	</div>
</section>

<!-- Support Options -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Choose the best way to get the support you need
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Contact Support -->
			<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
						<MessageSquare class="h-6 w-6 text-primary-600" />
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Contact Support</h3>
				<p class="text-gray-600 mb-4">
					Get in touch with our support team for personalized assistance with your questions.
				</p>
				<a href="/contact" class="text-primary-600 hover:text-primary-700 font-medium flex items-center">
					Contact Us
					<ArrowRight class="h-4 w-4 ml-2" />
				</a>
			</div>

			<!-- Phone Support -->
			<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
						<Phone class="h-6 w-6 text-accent-600" />
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Phone Support</h3>
				<p class="text-gray-600 mb-4">
					Call us directly for immediate assistance. Available during business hours.
				</p>
				<a href="tel:+1-800-TECHSTORE" class="text-accent-600 hover:text-accent-700 font-medium flex items-center">
					+1 (800) TECH-STORE
					<ArrowRight class="h-4 w-4 ml-2" />
				</a>
			</div>

			<!-- Email Support -->
			<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
						<Mail class="h-6 w-6 text-green-600" />
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
				<p class="text-gray-600 mb-4">
					Send us an email and we'll get back to you within 24 hours.
				</p>
				<a href="mailto:support@techstore.com" class="text-green-600 hover:text-green-700 font-medium flex items-center">
					support@techstore.com
					<ArrowRight class="h-4 w-4 ml-2" />
				</a>
			</div>

			<!-- Help Center -->
			<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
						<HelpCircle class="h-6 w-6 text-blue-600" />
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Help Center</h3>
				<p class="text-gray-600 mb-4">
					Find answers to frequently asked questions and common issues.
				</p>
				<a href="/contact#faq" class="text-blue-600 hover:text-blue-700 font-medium flex items-center">
					Browse FAQ
					<ArrowRight class="h-4 w-4 ml-2" />
				</a>
			</div>

			<!-- Learning Resources -->
			<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
						<BookOpen class="h-6 w-6 text-purple-600" />
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Learning Resources</h3>
				<p class="text-gray-600 mb-4">
					Access our comprehensive guides and tutorials about computer hardware.
				</p>
				<a href="/learn" class="text-purple-600 hover:text-purple-700 font-medium flex items-center">
					Learn More
					<ArrowRight class="h-4 w-4 ml-2" />
				</a>
			</div>

			<!-- Live Chat -->
			<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
						<MessageSquare class="h-6 w-6 text-orange-600" />
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
				<p class="text-gray-600 mb-4">
					Chat with our support team in real-time for instant assistance.
				</p>
				<button class="text-orange-600 hover:text-orange-700 font-medium flex items-center">
					Start Chat
					<ArrowRight class="h-4 w-4 ml-2" />
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Quick Links -->
<section class="py-16 bg-gray-50">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
			<p class="text-lg text-gray-600">
				Find what you need quickly with these popular support topics
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white rounded-lg p-6 shadow-sm">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">Order & Shipping</h3>
				<ul class="space-y-2 text-gray-600">
					<li><a href="/contact" class="hover:text-primary-600">Track your order</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Shipping information</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Return policy</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Order cancellation</a></li>
				</ul>
			</div>

			<div class="bg-white rounded-lg p-6 shadow-sm">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">Product Support</h3>
				<ul class="space-y-2 text-gray-600">
					<li><a href="/learn" class="hover:text-primary-600">Product guides</a></li>
					<li><a href="/learn" class="hover:text-primary-600">Compatibility checker</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Warranty information</a></li>
					<li><a href="/learn" class="hover:text-primary-600">Troubleshooting</a></li>
				</ul>
			</div>

			<div class="bg-white rounded-lg p-6 shadow-sm">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">Account & Billing</h3>
				<ul class="space-y-2 text-gray-600">
					<li><a href="/contact" class="hover:text-primary-600">Account management</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Payment methods</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Billing questions</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Security & privacy</a></li>
				</ul>
			</div>

			<div class="bg-white rounded-lg p-6 shadow-sm">
				<h3 class="text-lg font-semibold text-gray-900 mb-3">Technical Support</h3>
				<ul class="space-y-2 text-gray-600">
					<li><a href="/learn" class="hover:text-primary-600">PC building guides</a></li>
					<li><a href="/learn" class="hover:text-primary-600">Performance optimization</a></li>
					<li><a href="/contact" class="hover:text-primary-600">Custom PC consultation</a></li>
					<li><a href="/learn" class="hover:text-primary-600">Overclocking support</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-16 bg-primary-600 text-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-4">Still Need Help?</h2>
		<p class="text-xl text-primary-100 mb-8">
			Our support team is ready to assist you with any questions or concerns
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/contact" class="btn bg-accent-600 hover:bg-accent-700 text-white">
				Contact Support
			</a>
			<a href="/learn" class="btn bg-white hover:bg-gray-100 text-primary-600">
				Browse Guides
			</a>
		</div>
	</div>
</section> 