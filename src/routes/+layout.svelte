<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import type { CartItem, Product } from '$lib/types';
	import { writable } from 'svelte/store';

	// Global state stores
	const cartItems = writable<CartItem[]>([]);
	const cartOpen = writable(false);

	// Cart management functions
	function addToCart(product: Product) {
		cartItems.update(items => {
			const existingItem = items.find(item => item.product.id === product.id);
			if (existingItem) {
				return items.map(item =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...items, { product, quantity: 1 }];
			}
		});
	}

	function updateQuantity(productId: number, quantity: number) {
		cartItems.update(items =>
			items.map(item =>
				item.product.id === productId ? { ...item, quantity } : item
			)
		);
	}

	function removeItem(productId: number) {
		cartItems.update(items => items.filter(item => item.product.id !== productId));
	}

	function openCart() {
		cartOpen.set(true);
	}

	function closeCart() {
		cartOpen.set(false);
	}

	function checkout() {
		// TODO: Implement checkout functionality
		console.log('Checkout clicked');
		closeCart();
	}

	function viewProductDetails(product: Product) {
		// TODO: Navigate to product detail page
		console.log('View details for:', product.name);
	}
</script>

<div class="min-h-screen bg-gray-50">
	<Header
		bind:cartItems={$cartItems}
		bind:cartOpen={$cartOpen}
		{openCart}
	/>
	
	<main>
		<slot />
	</main>

	<Cart
		cartItems={$cartItems}
		cartOpen={$cartOpen}
		onClose={closeCart}
		onUpdateQuantity={updateQuantity}
		onRemoveItem={removeItem}
		onCheckout={checkout}
	/>
</div> 