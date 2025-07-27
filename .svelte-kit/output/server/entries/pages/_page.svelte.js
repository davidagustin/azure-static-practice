import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../chunks/ssr.js";
import { P as ProductCard, c as categories } from "../../chunks/products.js";
import { I as Icon } from "../../chunks/shopping-cart.js";
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Truck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"
      }
    ],
    ["path", { "d": "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" }],
    ["circle", { "cx": "7", "cy": "18", "r": "2" }],
    ["path", { "d": "M15 18H9" }],
    ["circle", { "cx": "17", "cy": "18", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "truck" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function addToCart(product) {
  console.log("Add to cart:", product.name);
}
function viewDetails(product) {
  console.log("View details:", product.name);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let featuredProducts = [];
  return `${$$result.head += `<!-- HEAD_svelte-1akj9zf_START -->${$$result.title = `<title>TechStore - Premium Computer Hardware</title>`, ""}<meta name="description" content="Your one-stop shop for premium computer hardware. CPUs, GPUs, storage, and more."><!-- HEAD_svelte-1akj9zf_END -->`, ""}  <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"><div class="text-center"><h1 class="text-4xl md:text-6xl font-bold mb-6" data-svelte-h="svelte-f281l8">Premium Computer Hardware</h1> <p class="text-xl md:text-2xl mb-8 text-primary-100" data-svelte-h="svelte-1qhbz0f">Build your dream PC with the latest components from top brands</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/products" class="btn bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center">Shop Now
					${validate_component(Arrow_right, "ArrowRight").$$render($$result, { class: "ml-2 h-5 w-5" }, {}, {})}</a> <a href="/about" class="btn border-2 border-white text-white hover:bg-white hover:text-primary-600" data-svelte-h="svelte-21vip7">Learn More</a></div></div></div></section>  <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center"><div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">${validate_component(Shield, "Shield").$$render($$result, { class: "h-8 w-8 text-primary-600" }, {}, {})}</div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-1cu87a3">Quality Guaranteed</h3> <p class="text-gray-600" data-svelte-h="svelte-1qg83k4">All products come with manufacturer warranty and our quality assurance</p></div> <div class="text-center"><div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">${validate_component(Truck, "Truck").$$render($$result, { class: "h-8 w-8 text-primary-600" }, {}, {})}</div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-1veqvzu">Fast Shipping</h3> <p class="text-gray-600" data-svelte-h="svelte-10xfgcn">Free shipping on orders over $100. Same-day processing available</p></div> <div class="text-center"><div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">${validate_component(Clock, "Clock").$$render($$result, { class: "h-8 w-8 text-primary-600" }, {}, {})}</div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-1rm35nx">24/7 Support</h3> <p class="text-gray-600" data-svelte-h="svelte-1w0x3a6">Expert technical support available around the clock</p></div></div></div></section>  <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-1qwlmm7"><h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2> <p class="text-lg text-gray-600">Top-rated components chosen by our customers</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(featuredProducts, (product) => {
    return `${validate_component(ProductCard, "ProductCard").$$render(
      $$result,
      {
        product,
        onAddToCart: addToCart,
        onViewDetails: viewDetails
      },
      {},
      {}
    )}`;
  })}</div> <div class="text-center mt-8"><a href="/products" class="btn btn-primary inline-flex items-center">View All Products
				${validate_component(Arrow_right, "ArrowRight").$$render($$result, { class: "ml-2 h-5 w-5" }, {}, {})}</a></div></div></section>  <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-eppmue"><h2 class="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2> <p class="text-lg text-gray-600">Find exactly what you need for your build</p></div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">${each(categories.filter((c) => c.id !== "all"), (category) => {
    return `<a href="${"/products?category=" + escape(category.id, true)}" class="card text-center p-6 hover:shadow-lg transition-shadow group"><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors"><span class="text-primary-600 font-bold text-lg">${escape(category.name.charAt(0))} </span></div> <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">${escape(category.name)}</h3> </a>`;
  })}</div></div></section>  <section class="py-16 bg-primary-600 text-white" data-svelte-h="svelte-657j5h"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-bold mb-4">Stay Updated</h2> <p class="text-xl text-primary-100 mb-8">Get notified about new products, special offers, and tech tips</p> <div class="max-w-md mx-auto flex"><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"> <button class="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-r-lg font-medium transition-colors">Subscribe</button></div></div></section>`;
});
export {
  Page as default
};
