import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape } from "../../../chunks/ssr.js";
import { c as categories, p as products, P as ProductCard } from "../../../chunks/products.js";
import { I as Icon } from "../../../chunks/shopping-cart.js";
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "filter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Grid_3x3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 9h18" }],
    ["path", { "d": "M3 15h18" }],
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "M15 3v18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "grid-3x3" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "8",
        "x2": "21",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "21",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "21",
        "y1": "18",
        "y2": "18"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "3.01",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "3.01",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "3.01",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "list" }, $$props, { iconNode }), {}, {
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
  let sortBy = "name";
  let searchQuery = "";
  let filteredProducts = [];
  function filterProducts() {
    let filtered = products;
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    filteredProducts = filtered;
  }
  {
    {
      filterProducts();
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1cc9zv6_START -->${$$result.title = `<title>Products - TechStore</title>`, ""}<meta name="description" content="Browse our complete selection of computer hardware components."><!-- HEAD_svelte-1cc9zv6_END -->`, ""} <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="mb-8" data-svelte-h="svelte-4yc7sf"><h1 class="text-3xl font-bold text-gray-900 mb-2">All Products</h1> <p class="text-gray-600">Find the perfect components for your build</p></div>  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"> <div class="flex-1 max-w-md"><input type="text" placeholder="Search products..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"${add_attribute("value", searchQuery, 0)}></div>  <div class="flex items-center space-x-4"> <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">${each(categories, (category) => {
    return `<option${add_attribute("value", category.id, 0)}>${escape(category.name)}</option>`;
  })}</select>  <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="name" data-svelte-h="svelte-o71vpn">Sort by Name</option><option value="price-low" data-svelte-h="svelte-ctkm0y">Price: Low to High</option><option value="price-high" data-svelte-h="svelte-1ie14ao">Price: High to Low</option><option value="rating" data-svelte-h="svelte-4il9j7">Sort by Rating</option></select>  <div class="flex border border-gray-300 rounded-lg"><button class="${"p-2 " + escape(
    "bg-primary-600 text-white",
    true
  )}" aria-label="Grid view">${validate_component(Grid_3x3, "Grid").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button> <button class="${"p-2 " + escape(
    "text-gray-600 hover:text-gray-900",
    true
  )}" aria-label="List view">${validate_component(List, "List").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button></div></div></div></div>  <div class="flex items-center justify-between mb-6"><p class="text-gray-600">Showing ${escape(filteredProducts.length)} of ${escape(products.length)} products</p> ${``}</div>  ${filteredProducts.length === 0 ? `<div class="text-center py-12"><div class="text-gray-400 mb-4">${validate_component(Filter, "Filter").$$render($$result, { class: "h-16 w-16 mx-auto" }, {}, {})}</div> <h3 class="text-lg font-medium text-gray-900 mb-2" data-svelte-h="svelte-1mv0mb1">No products found</h3> <p class="text-gray-500" data-svelte-h="svelte-pfi0rr">Try adjusting your search or filter criteria</p></div>` : `<div class="${"grid gap-6 " + escape(
    "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    true
  )}">${each(filteredProducts, (product) => {
    return `${`${validate_component(ProductCard, "ProductCard").$$render(
      $$result,
      {
        product,
        onAddToCart: addToCart,
        onViewDetails: viewDetails
      },
      {},
      {}
    )}`}`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
