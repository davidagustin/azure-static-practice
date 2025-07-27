<script lang="ts">
	import { onMount } from 'svelte';
	import { HelpCircle, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Help - TechStore</title>
	<meta name="description" content="Get help and support for your TechStore experience." />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<div class="text-center">
				<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
					<HelpCircle class="h-6 w-6 text-blue-600" />
				</div>
				
				<h1 class="text-2xl font-bold text-gray-900 mb-4">Help Center</h1>
				<p class="text-gray-600 mb-8">
					You're looking for help! We've moved our help resources to our comprehensive support center.
				</p>

				<div class="space-y-4">
					<a
						href="/support"
						class="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
					>
						Go to Support Center
						<ArrowRight class="h-4 w-4 ml-2" />
					</a>
					
					<a
						href="/contact"
						class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
					>
						Contact Us Directly
					</a>
				</div>

				<div class="mt-8 pt-8 border-t border-gray-200">
					<h3 class="text-sm font-medium text-gray-900 mb-4">Quick Help Options</h3>
					<div class="space-y-2 text-sm">
						<a href="/learn" class="block text-primary-600 hover:text-primary-700">
							📚 Learning Resources & Guides
						</a>
						<a href="/contact#faq" class="block text-primary-600 hover:text-primary-700">
							❓ Frequently Asked Questions
						</a>
						<a href="mailto:support@techstore.com" class="block text-primary-600 hover:text-primary-700">
							📧 Email Support
						</a>
						<a href="tel:+1-800-TECHSTORE" class="block text-primary-600 hover:text-primary-700">
							📞 Phone Support
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> 