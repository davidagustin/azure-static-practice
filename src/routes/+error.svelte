<script lang="ts">
	import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page Not Found - TechStore</title>
	<meta name="description" content="The page you're looking for doesn't exist. Find what you need at TechStore." />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<div class="text-center">
				<!-- 404 Icon -->
				<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-6">
					<HelpCircle class="h-6 w-6 text-red-600" />
				</div>
				
				<h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
				<h2 class="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
				<p class="text-gray-600 mb-8">
					Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
				</p>

				<!-- Error Details -->
				{#if $page.error?.message}
					<div class="bg-gray-50 rounded-lg p-4 mb-8">
						<p class="text-sm text-gray-600">
							<strong>Error:</strong> {$page.error.message}
						</p>
					</div>
				{/if}

				<!-- Quick Actions -->
				<div class="space-y-4">
					<a
						href="/"
						class="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
					>
						<Home class="h-4 w-4 mr-2" />
						Go to Homepage
					</a>
					
					<a
						href="/products"
						class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
					>
						<Search class="h-4 w-4 mr-2" />
						Browse Products
					</a>
				</div>

				<!-- Popular Pages -->
				<div class="mt-8 pt-8 border-t border-gray-200">
					<h3 class="text-sm font-medium text-gray-900 mb-4">Popular Pages</h3>
					<div class="grid grid-cols-2 gap-4">
						<a href="/about" class="text-sm text-primary-600 hover:text-primary-700">
							About Us
						</a>
						<a href="/contact" class="text-sm text-primary-600 hover:text-primary-700">
							Contact
						</a>
						<a href="/learn" class="text-sm text-primary-600 hover:text-primary-700">
							Learn More
						</a>
						<a href="/products" class="text-sm text-primary-600 hover:text-primary-700">
							All Products
						</a>
					</div>
				</div>

				<!-- Back Button -->
				<div class="mt-8">
					<button
						on:click={() => history.back()}
						class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
					>
						<ArrowLeft class="h-4 w-4 mr-1" />
						Go Back
					</button>
				</div>
			</div>
		</div>
	</div>
</div> 