<script lang="ts">
	import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-svelte';
	import type { CartItem } from '$lib/types';

	export let cartItems: CartItem[] = [];
	export let cartOpen: boolean;
	export let onClose: () => void;
	export let onUpdateQuantity: (productId: number, quantity: number) => void;
	export let onRemoveItem: (productId: number) => void;
	export let onCheckout: () => void;

	function formatPrice(price: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(price);
	}

	$: cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
	$: itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

	function handleQuantityChange(productId: number, newQuantity: number) {
		if (newQuantity >= 1) {
			onUpdateQuantity(productId, newQuantity);
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onClose();
		}
	}
</script>

<!-- Cart Overlay -->
{#if cartOpen}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-50"
		on:click={onClose}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="cart-title"
		tabindex="-1"
	>
		<!-- Cart Panel -->
		<div
			class="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
			role="document"
			aria-label="Shopping cart"
		>
			<div class="flex flex-col h-full">
				<!-- Header -->
				<div class="flex items-center justify-between p-4 border-b border-gray-200">
					<h2 id="cart-title" class="text-lg font-semibold text-gray-900">Shopping Cart ({itemCount})</h2>
					<button
						on:click={onClose}
						class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
						aria-label="Close cart"
					>
						<X class="h-6 w-6" />
					</button>
				</div>

				<!-- Cart Items -->
				<div class="flex-1 overflow-y-auto p-4">
					{#if cartItems.length === 0}
						<div class="text-center py-8">
							<div class="text-gray-400 mb-4">
								<ShoppingCart class="h-16 w-16 mx-auto" />
							</div>
							<p class="text-gray-500">Your cart is empty</p>
							<p class="text-sm text-gray-400">Add some products to get started!</p>
						</div>
					{:else}
						<div class="space-y-4">
							{#each cartItems as item (item.product.id)}
								<div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
									<!-- Product Image -->
									<img
										src={item.product.image}
										alt={item.product.name}
										class="w-16 h-16 object-cover rounded-md"
									/>
									
									<!-- Product Details -->
									<div class="flex-1 min-w-0">
										<h3 class="text-sm font-medium text-gray-900 truncate">
											{item.product.name}
										</h3>
										<p class="text-sm text-gray-500">{item.product.category}</p>
										<p class="text-sm font-medium text-gray-900">
											{formatPrice(item.product.price)}
										</p>
									</div>
									
									<!-- Quantity Controls -->
									<div class="flex items-center space-x-2">
										<button
											on:click={() => handleQuantityChange(item.product.id, item.quantity - 1)}
											class="p-1 text-gray-400 hover:text-gray-600 transition-colors"
											aria-label="Decrease quantity"
										>
											<Minus class="h-4 w-4" />
										</button>
										<span class="text-sm font-medium text-gray-900 w-8 text-center">
											{item.quantity}
										</span>
										<button
											on:click={() => handleQuantityChange(item.product.id, item.quantity + 1)}
											class="p-1 text-gray-400 hover:text-gray-600 transition-colors"
											aria-label="Increase quantity"
										>
											<Plus class="h-4 w-4" />
										</button>
									</div>
									
									<!-- Remove Button -->
									<button
										on:click={() => onRemoveItem(item.product.id)}
										class="p-1 text-red-400 hover:text-red-600 transition-colors"
										aria-label="Remove item"
									>
										<Trash2 class="h-4 w-4" />
									</button>
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Footer -->
				{#if cartItems.length > 0}
					<div class="border-t border-gray-200 p-4">
						<div class="flex justify-between items-center mb-4">
							<span class="text-lg font-semibold text-gray-900">Total:</span>
							<span class="text-2xl font-bold text-gray-900">{formatPrice(cartTotal)}</span>
						</div>
						<button
							on:click={onCheckout}
							class="w-full btn btn-primary"
						>
							Proceed to Checkout
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if} 