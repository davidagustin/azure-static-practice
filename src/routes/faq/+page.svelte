<script lang="ts">
	import { HelpCircle, ArrowRight, Search } from 'lucide-svelte';
</script>

<svelte:head>
	<title>FAQ - TechStore</title>
	<meta name="description" content="Frequently asked questions about TechStore products and services." />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<div class="text-center">
				<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-6">
					<HelpCircle class="h-6 w-6 text-green-600" />
				</div>
				
				<h1 class="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
				<p class="text-gray-600 mb-8">
					Looking for answers? Our comprehensive FAQ section has moved to our contact page.
				</p>

				<div class="space-y-4">
					<a
						href="/contact#faq"
						class="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
					>
						View All FAQs
						<ArrowRight class="h-4 w-4 ml-2" />
					</a>
					
					<a
						href="/contact"
						class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
					>
						Contact Support
					</a>
				</div>

				<div class="mt-8 pt-8 border-t border-gray-200">
					<h3 class="text-sm font-medium text-gray-900 mb-4">Popular Questions</h3>
					<div class="space-y-3 text-sm text-left">
						<div class="bg-gray-50 p-3 rounded-lg">
							<strong class="text-gray-900">What is your return policy?</strong>
							<p class="text-gray-600 mt-1">30-day return policy for all products in original condition.</p>
						</div>
						<div class="bg-gray-50 p-3 rounded-lg">
							<strong class="text-gray-900">Do you offer technical support?</strong>
							<p class="text-gray-600 mt-1">Yes! 24/7 technical support via phone, email, and live chat.</p>
						</div>
						<div class="bg-gray-50 p-3 rounded-lg">
							<strong class="text-gray-900">How long does shipping take?</strong>
							<p class="text-gray-600 mt-1">Standard shipping: 3-5 business days. Express: 1-2 business days.</p>
						</div>
					</div>
					
					<div class="mt-4">
						<a href="/contact#faq" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
							View all questions →
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> 