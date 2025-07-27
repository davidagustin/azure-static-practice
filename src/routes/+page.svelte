<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowRight, Star, Shield, Truck, Clock } from 'lucide-svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products, categories } from '$lib/data/products';
	import type { Product } from '$lib/types';

	let featuredProducts: Product[] = [];

	onMount(() => {
		// Get featured products (top rated)
		featuredProducts = products
			.sort((a, b) => b.rating - a.rating)
			.slice(0, 4);
	});

	function addToCart(product: Product) {
		// This will be handled by the layout component
		console.log('Add to cart:', product.name);
	}

	function viewDetails(product: Product) {
		// TODO: Navigate to product detail page
		console.log('View details:', product.name);
	}


</script>

<svelte:head>
	<title>TechStore - Premium Computer Hardware</title>
	<meta name="description" content="Your one-stop shop for premium computer hardware. CPUs, GPUs, storage, and more." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				Premium Computer Hardware
			</h1>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				Build your dream PC with the latest components from top brands
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/products"
					class="btn bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center"
				>
					Shop Now
					<ArrowRight class="ml-2 h-5 w-5" />
				</a>
				<a
					href="/about"
					class="btn border-2 border-white text-white hover:bg-white hover:text-primary-600"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
					<Shield class="h-8 w-8 text-primary-600" />
				</div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
				<p class="text-gray-600">All products come with manufacturer warranty and our quality assurance</p>
			</div>
			<div class="text-center">
				<div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
					<Truck class="h-8 w-8 text-primary-600" />
				</div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
				<p class="text-gray-600">Free shipping on orders over $100. Same-day processing available</p>
			</div>
			<div class="text-center">
				<div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
					<Clock class="h-8 w-8 text-primary-600" />
				</div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
				<p class="text-gray-600">Expert technical support available around the clock</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured Products -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
			<p class="text-lg text-gray-600">Top-rated components chosen by our customers</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each featuredProducts as product (product.id)}
				<ProductCard
					{product}
					onAddToCart={addToCart}
					onViewDetails={viewDetails}
				/>
			{/each}
		</div>
		
		<div class="text-center mt-8">
			<a
				href="/products"
				class="btn btn-primary inline-flex items-center"
			>
				View All Products
				<ArrowRight class="ml-2 h-5 w-5" />
			</a>
		</div>
	</div>
</section>

<!-- Categories Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
			<p class="text-lg text-gray-600">Find exactly what you need for your build</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
			{#each categories.filter(c => c.id !== 'all') as category (category.id)}
				<a
					href="/products?category={category.id}"
					class="card text-center p-6 hover:shadow-lg transition-shadow group"
				>
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
						<span class="text-primary-600 font-bold text-lg">
							{category.name.charAt(0)}
						</span>
					</div>
					<h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
						{category.name}
					</h3>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Newsletter Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
		<p class="text-xl text-primary-100 mb-8">
			Get notified about new products, special offers, and tech tips
		</p>
		<div class="max-w-md mx-auto flex">
			<input
				type="email"
				placeholder="Enter your email"
				class="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
			/>
			<button class="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
				Subscribe
			</button>
		</div>
	</div>
</section> 