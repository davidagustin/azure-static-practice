<script lang="ts">
	import { onMount } from 'svelte';
	import { Filter, Grid, List, Star } from 'lucide-svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products, categories } from '$lib/data/products';
	import type { Product } from '$lib/types';

	let selectedCategory = 'all';
	let sortBy = 'name';
	let viewMode: 'grid' | 'list' = 'grid';
	let searchQuery = '';
	let showFilters = false;

	let filteredProducts: Product[] = [];

	onMount(() => {
		filterProducts();
	});

	function filterProducts() {
		let filtered = products;

		// Filter by category
		if (selectedCategory !== 'all') {
			filtered = filtered.filter(p => p.category === selectedCategory);
		}

		// Filter by search query
		if (searchQuery) {
			filtered = filtered.filter(p =>
				p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				p.category.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Sort products
		filtered = [...filtered].sort((a, b) => {
			switch (sortBy) {
				case 'name':
					return a.name.localeCompare(b.name);
				case 'price-low':
					return a.price - b.price;
				case 'price-high':
					return b.price - a.price;
				case 'rating':
					return b.rating - a.rating;
				default:
					return 0;
			}
		});

		filteredProducts = filtered;
	}

	$: {
		filterProducts();
	}

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
	<title>Products - TechStore</title>
	<meta name="description" content="Browse our complete selection of computer hardware components." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<!-- Page Header -->
	<div class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
		<p class="text-gray-600">Find the perfect components for your build</p>
	</div>

	<!-- Search and Filters -->
	<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
		<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
			<!-- Search Bar -->
			<div class="flex-1 max-w-md">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search products..."
					class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
				/>
			</div>

			<!-- Controls -->
			<div class="flex items-center space-x-4">
				<!-- Category Filter -->
				<select
					bind:value={selectedCategory}
					class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
				>
					{#each categories as category (category.id)}
						<option value={category.id}>{category.name}</option>
					{/each}
				</select>

				<!-- Sort By -->
				<select
					bind:value={sortBy}
					class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
				>
					<option value="name">Sort by Name</option>
					<option value="price-low">Price: Low to High</option>
					<option value="price-high">Price: High to Low</option>
					<option value="rating">Sort by Rating</option>
				</select>

				<!-- View Mode Toggle -->
				<div class="flex border border-gray-300 rounded-lg">
					<button
						on:click={() => viewMode = 'grid'}
						class="p-2 {viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'}"
						aria-label="Grid view"
					>
						<Grid class="h-5 w-5" />
					</button>
					<button
						on:click={() => viewMode = 'list'}
						class="p-2 {viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'}"
						aria-label="List view"
					>
						<List class="h-5 w-5" />
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Results Info -->
	<div class="flex items-center justify-between mb-6">
		<p class="text-gray-600">
			Showing {filteredProducts.length} of {products.length} products
		</p>
		{#if selectedCategory !== 'all' || searchQuery}
			<button
				on:click={() => { selectedCategory = 'all'; searchQuery = ''; }}
				class="text-primary-600 hover:text-primary-700 text-sm font-medium"
			>
				Clear filters
			</button>
		{/if}
	</div>

	<!-- Products Grid -->
	{#if filteredProducts.length === 0}
		<div class="text-center py-12">
			<div class="text-gray-400 mb-4">
				<Filter class="h-16 w-16 mx-auto" />
			</div>
			<h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
			<p class="text-gray-500">Try adjusting your search or filter criteria</p>
		</div>
	{:else}
		<div class="grid gap-4 lg:gap-6 {viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}">
			{#each filteredProducts as product (product.id)}
				{#if viewMode === 'grid'}
					<ProductCard
						{product}
						onAddToCart={addToCart}
						onViewDetails={viewDetails}
					/>
				{:else}
					<!-- List View -->
					<div class="card flex items-center space-x-6">
						<img
							src={product.image}
							alt={product.name}
							class="w-24 h-24 object-cover rounded-lg"
						/>
						<div class="flex-1">
							<div class="flex items-start justify-between">
								<div>
									<h3 class="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
									<p class="text-sm text-primary-600 font-medium mb-2">{product.category}</p>
									<p class="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
									<div class="flex items-center space-x-4">
										<div class="flex items-center">
											<Star class="h-4 w-4 text-yellow-400 fill-current" />
											<span class="text-sm text-gray-600 ml-1">{product.rating}</span>
										</div>
										<span class="text-sm text-gray-500">Stock: {product.stock}</span>
									</div>
								</div>
								<div class="text-right">
									<div class="text-2xl font-bold text-gray-900 mb-4">
										${product.price.toFixed(2)}
									</div>
									<button
										on:click={() => addToCart(product)}
										disabled={product.stock === 0}
										class="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div> 