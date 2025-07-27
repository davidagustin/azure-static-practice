import { c as create_ssr_component, v as validate_component, g as getContext, d as subscribe, e as escape } from "../../chunks/ssr.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import { o as onMount } from "../../chunks/ssr2.js";
import { H as Help_circle } from "../../chunks/help-circle.js";
import { I as Icon } from "../../chunks/Icon.js";
import { S as Search } from "../../chunks/search.js";
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ],
    ["polyline", { "points": "9 22 9 12 15 12 15 22" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "home" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const is_legacy = onMount.toString().includes("$$") || /function \w+\(\) \{\}/.test(onMount.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ojkctv_START -->${$$result.title = `<title>Page Not Found - TechStore</title>`, ""}<meta name="description" content="The page you're looking for doesn't exist. Find what you need at TechStore."><!-- HEAD_svelte-1ojkctv_END -->`, ""} <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><div class="text-center"> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-6">${validate_component(Help_circle, "HelpCircle").$$render($$result, { class: "h-6 w-6 text-red-600" }, {}, {})}</div> <h1 class="text-6xl font-bold text-gray-900 mb-4" data-svelte-h="svelte-1f1xuez">404</h1> <h2 class="text-2xl font-semibold text-gray-900 mb-4" data-svelte-h="svelte-pm8z43">Page Not Found</h2> <p class="text-gray-600 mb-8" data-svelte-h="svelte-e0i768">Sorry, we couldn&#39;t find the page you&#39;re looking for. The page might have been moved, deleted, or you entered the wrong URL.</p>  ${$page.error?.message ? `<div class="bg-gray-50 rounded-lg p-4 mb-8"><p class="text-sm text-gray-600"><strong data-svelte-h="svelte-1s1dywc">Error:</strong> ${escape($page.error.message)}</p></div>` : ``}  <div class="space-y-4"><a href="/" class="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">${validate_component(Home, "Home").$$render($$result, { class: "h-4 w-4 mr-2" }, {}, {})}
						Go to Homepage</a> <a href="/products" class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">${validate_component(Search, "Search").$$render($$result, { class: "h-4 w-4 mr-2" }, {}, {})}
						Browse Products</a></div>  <div class="mt-8 pt-8 border-t border-gray-200" data-svelte-h="svelte-opvz3s"><h3 class="text-sm font-medium text-gray-900 mb-4">Popular Pages</h3> <div class="grid grid-cols-2 gap-4"><a href="/about" class="text-sm text-primary-600 hover:text-primary-700">About Us</a> <a href="/contact" class="text-sm text-primary-600 hover:text-primary-700">Contact</a> <a href="/learn" class="text-sm text-primary-600 hover:text-primary-700">Learn More</a> <a href="/products" class="text-sm text-primary-600 hover:text-primary-700">All Products</a></div></div>  <div class="mt-8"><button class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "h-4 w-4 mr-1" }, {}, {})}
						Go Back</button></div></div></div></div></div>`;
});
export {
  Error$1 as default
};
