import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each, d as subscribe } from "../../chunks/ssr.js";
import { I as Icon, S as Shopping_cart } from "../../chunks/shopping-cart.js";
import { w as writable } from "../../chunks/index.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "minus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "search" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Trash_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      {
        "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      }
    ],
    [
      "path",
      {
        "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trash-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cartItemCount;
  let { cartItems = [] } = $$props;
  let { cartOpen = false } = $$props;
  let searchQuery = "";
  if ($$props.cartItems === void 0 && $$bindings.cartItems && cartItems !== void 0) $$bindings.cartItems(cartItems);
  if ($$props.cartOpen === void 0 && $$bindings.cartOpen && cartOpen !== void 0) $$bindings.cartOpen(cartOpen);
  cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  return `<header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"> <div class="flex items-center" data-svelte-h="svelte-19ux9m4"><a href="/" class="flex items-center space-x-2"><div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-sm">PC</span></div> <span class="text-xl font-bold text-gray-900">TechStore</span></a></div>  <nav class="hidden md:flex space-x-8" data-svelte-h="svelte-rnfi0j"><a href="/" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</a> <a href="/products" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Products</a> <a href="/about" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</a> <a href="/contact" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a></nav>  <div class="hidden md:flex flex-1 max-w-lg mx-8"><div class="relative w-full"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">${validate_component(Search, "Search").$$render($$result, { class: "h-5 w-5 text-gray-400" }, {}, {})}</div> <input type="text" placeholder="Search products..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"${add_attribute("value", searchQuery, 0)}></div></div>  <div class="flex items-center space-x-4"> <button class="relative p-2 text-gray-700 hover:text-primary-600 transition-colors" aria-label="Shopping cart">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { class: "h-6 w-6" }, {}, {})} ${cartItemCount > 0 ? `<span class="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${escape(cartItemCount)}</span>` : ``}</button>  <button class="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors" aria-label="Toggle mobile menu">${`${validate_component(Menu, "Menu").$$render($$result, { class: "h-6 w-6" }, {}, {})}`}</button></div></div>  <div class="md:hidden pb-4"><div class="relative"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">${validate_component(Search, "Search").$$render($$result, { class: "h-5 w-5 text-gray-400" }, {}, {})}</div> <input type="text" placeholder="Search products..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"${add_attribute("value", searchQuery, 0)}></div></div></div>  ${``}</header>`;
});
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cartTotal;
  let itemCount;
  let { cartItems = [] } = $$props;
  let { cartOpen } = $$props;
  let { onClose } = $$props;
  let { onUpdateQuantity } = $$props;
  let { onRemoveItem } = $$props;
  let { onCheckout } = $$props;
  if ($$props.cartItems === void 0 && $$bindings.cartItems && cartItems !== void 0) $$bindings.cartItems(cartItems);
  if ($$props.cartOpen === void 0 && $$bindings.cartOpen && cartOpen !== void 0) $$bindings.cartOpen(cartOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.onUpdateQuantity === void 0 && $$bindings.onUpdateQuantity && onUpdateQuantity !== void 0) $$bindings.onUpdateQuantity(onUpdateQuantity);
  if ($$props.onRemoveItem === void 0 && $$bindings.onRemoveItem && onRemoveItem !== void 0) $$bindings.onRemoveItem(onRemoveItem);
  if ($$props.onCheckout === void 0 && $$bindings.onCheckout && onCheckout !== void 0) $$bindings.onCheckout(onCheckout);
  cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return ` ${cartOpen ? `<div class="fixed inset-0 bg-black bg-opacity-50 z-50" role="dialog" aria-modal="true"> <div class="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out"><div class="flex flex-col h-full"> <div class="flex items-center justify-between p-4 border-b border-gray-200"><h2 class="text-lg font-semibold text-gray-900">Shopping Cart (${escape(itemCount)})</h2> <button class="p-2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close cart">${validate_component(X, "X").$$render($$result, { class: "h-6 w-6" }, {}, {})}</button></div>  <div class="flex-1 overflow-y-auto p-4">${cartItems.length === 0 ? `<div class="text-center py-8"><div class="text-gray-400 mb-4">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { class: "h-16 w-16 mx-auto" }, {}, {})}</div> <p class="text-gray-500" data-svelte-h="svelte-1ot8n0w">Your cart is empty</p> <p class="text-sm text-gray-400" data-svelte-h="svelte-s1qhzf">Add some products to get started!</p></div>` : `<div class="space-y-4">${each(cartItems, (item) => {
    return `<div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"> <img${add_attribute("src", item.product.image, 0)}${add_attribute("alt", item.product.name, 0)} class="w-16 h-16 object-cover rounded-md">  <div class="flex-1 min-w-0"><h3 class="text-sm font-medium text-gray-900 truncate">${escape(item.product.name)}</h3> <p class="text-sm text-gray-500">${escape(item.product.category)}</p> <p class="text-sm font-medium text-gray-900">${escape(formatPrice(item.product.price))} </p></div>  <div class="flex items-center space-x-2"><button class="p-1 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Decrease quantity">${validate_component(Minus, "Minus").$$render($$result, { class: "h-4 w-4" }, {}, {})}</button> <span class="text-sm font-medium text-gray-900 w-8 text-center">${escape(item.quantity)}</span> <button class="p-1 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Increase quantity">${validate_component(Plus, "Plus").$$render($$result, { class: "h-4 w-4" }, {}, {})} </button></div>  <button class="p-1 text-red-400 hover:text-red-600 transition-colors" aria-label="Remove item">${validate_component(Trash_2, "Trash2").$$render($$result, { class: "h-4 w-4" }, {}, {})}</button> </div>`;
  })}</div>`}</div>  ${cartItems.length > 0 ? `<div class="border-t border-gray-200 p-4"><div class="flex justify-between items-center mb-4"><span class="text-lg font-semibold text-gray-900" data-svelte-h="svelte-9xp5io">Total:</span> <span class="text-2xl font-bold text-gray-900">${escape(formatPrice(cartTotal))}</span></div> <button class="w-full btn btn-primary" data-svelte-h="svelte-1mtypd8">Proceed to Checkout</button></div>` : ``}</div></div></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartItems, $$unsubscribe_cartItems;
  let $cartOpen, $$unsubscribe_cartOpen;
  const cartItems = writable([]);
  $$unsubscribe_cartItems = subscribe(cartItems, (value) => $cartItems = value);
  const cartOpen = writable(false);
  $$unsubscribe_cartOpen = subscribe(cartOpen, (value) => $cartOpen = value);
  function updateQuantity(productId, quantity) {
    cartItems.update((items) => items.map((item) => item.product.id === productId ? { ...item, quantity } : item));
  }
  function removeItem(productId) {
    cartItems.update((items) => items.filter((item) => item.product.id !== productId));
  }
  function openCart() {
    cartOpen.set(true);
  }
  function closeCart() {
    cartOpen.set(false);
  }
  function checkout() {
    console.log("Checkout clicked");
    closeCart();
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="min-h-screen bg-gray-50">${validate_component(Header, "Header").$$render(
      $$result,
      {
        openCart,
        cartItems: $cartItems,
        cartOpen: $cartOpen
      },
      {
        cartItems: ($$value) => {
          $cartItems = $$value;
          $$settled = false;
        },
        cartOpen: ($$value) => {
          $cartOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Cart, "Cart").$$render(
      $$result,
      {
        cartItems: $cartItems,
        cartOpen: $cartOpen,
        onClose: closeCart,
        onUpdateQuantity: updateQuantity,
        onRemoveItem: removeItem,
        onCheckout: checkout
      },
      {},
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_cartItems();
  $$unsubscribe_cartOpen();
  return $$rendered;
});
export {
  Layout as default
};
