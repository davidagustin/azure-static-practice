<script lang="ts">
	import { Star, ShoppingCart, Eye } from 'lucide-svelte';
	import type { Product } from '$lib/types';

	export let product: Product;
	export let onAddToCart: (product: Product) => void;
	export let onViewDetails: (product: Product) => void;

	function formatPrice(price: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(price);
	}

	function renderStars(rating: number): number[] {
		return Array.from({ length: 5 }, (_, i) => i + 1);
	}
</script>

<div class="card group h-full flex flex-col">
	<div class="relative overflow-hidden rounded-lg">
		<img
			src={product.image}
			alt={product.name}
			class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
		/>
		<div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
		
		<!-- Quick Actions -->
		<div class="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
			<button
				on:click={() => onViewDetails(product)}
				class="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
				aria-label="View details"
			>
				<Eye class="h-4 w-4 text-gray-600" />
			</button>
		</div>

		<!-- Stock Badge -->
		{#if product.stock < 5 && product.stock > 0}
			<div class="absolute top-2 left-2">
				<span class="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
					Only {product.stock} left
				</span>
			</div>
		{:else if product.stock === 0}
			<div class="absolute top-2 left-2">
				<span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
					Out of Stock
				</span>
			</div>
		{/if}
	</div>

	<div class="p-4 flex-1 flex flex-col">
		<!-- Category -->
		<div class="text-sm text-primary-600 font-medium mb-1">{product.category}</div>
		
		<!-- Product Name -->
		<h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
			{product.name}
		</h3>
		
		<!-- Description -->
		<p class="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">{product.description}</p>
		
		<!-- Rating -->
		<div class="flex items-center mb-3">
			<div class="flex items-center">
				{#each renderStars(product.rating) as star}
					<Star
						class="h-4 w-4 {star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}"
					/>
				{/each}
			</div>
			<span class="text-sm text-gray-600 ml-2">({product.rating})</span>
		</div>
		
		<!-- Price and Add to Cart -->
		<div class="mt-auto">
			<div class="text-2xl font-bold text-gray-900 mb-3">{formatPrice(product.price)}</div>
			<button
				on:click={() => onAddToCart(product)}
				disabled={product.stock === 0}
				class="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
			>
				<ShoppingCart class="h-4 w-4" />
				<span class="hidden sm:inline">Add to Cart</span>
				<span class="sm:hidden">Add</span>
			</button>
		</div>
	</div>
</div> 