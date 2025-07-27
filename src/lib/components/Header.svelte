<script lang="ts">
	import { ShoppingCart, Menu, X, Search } from 'lucide-svelte';
	import type { CartItem } from '$lib/types';

	export let cartItems: CartItem[] = [];
	export let cartOpen = false;

	let mobileMenuOpen = false;
	let searchQuery = '';

	$: cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
	$: cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function toggleCart() {
		cartOpen = !cartOpen;
	}

	function handleSearchKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && searchQuery.trim()) {
			// TODO: Implement search functionality
			console.log('Search for:', searchQuery);
		}
	}
</script>

<header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-2" aria-label="TechStore Home">
					<div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-sm">PC</span>
					</div>
					<span class="text-xl font-bold text-gray-900">TechStore</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex space-x-8" aria-label="Main navigation">
				<a href="/" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
					Home
				</a>
				<a href="/products" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
					Products
				</a>
				<a href="/about" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
					About
				</a>
				<a href="/contact" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
					Contact
				</a>
			</nav>

			<!-- Search Bar -->
			<div class="hidden md:flex flex-1 max-w-lg mx-8">
				<div class="relative w-full">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Search class="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<input
						type="text"
						bind:value={searchQuery}
						on:keydown={handleSearchKeydown}
						placeholder="Search products..."
						class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
						aria-label="Search products"
					/>
				</div>
			</div>

			<!-- Cart and Mobile Menu -->
			<div class="flex items-center space-x-4">
				<!-- Cart Button -->
				<button
					on:click={toggleCart}
					class="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
					aria-label="Shopping cart"
					aria-expanded={cartOpen}
				>
					<ShoppingCart class="h-6 w-6" />
					{#if cartItemCount > 0}
						<span class="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
							{cartItemCount}
						</span>
					{/if}
				</button>

				<!-- Mobile menu button -->
				<button
					on:click={toggleMobileMenu}
					class="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
					aria-label="Toggle mobile menu"
					aria-expanded={mobileMenuOpen}
				>
					{#if mobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Search -->
		<div class="md:hidden pb-4">
			<div class="relative">
				<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Search class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					type="text"
					bind:value={searchQuery}
					on:keydown={handleSearchKeydown}
					placeholder="Search products..."
					class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
					aria-label="Search products"
				/>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden bg-white border-t border-gray-200" aria-label="Mobile navigation">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<a
					href="/"
					class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
				>
					Home
				</a>
				<a
					href="/products"
					class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
				>
					Products
				</a>
				<a
					href="/about"
					class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
				>
					About
				</a>
				<a
					href="/contact"
					class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
				>
					Contact
				</a>
			</div>
		</div>
	{/if}
</header> 