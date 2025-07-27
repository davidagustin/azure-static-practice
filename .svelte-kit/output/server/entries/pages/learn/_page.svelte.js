import { c as create_ssr_component, v as validate_component, b as each, e as escape, a as add_attribute, m as missing_component } from "../../../chunks/ssr.js";
import { B as Book_open } from "../../../chunks/book-open.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { A as Arrow_right } from "../../../chunks/arrow-right.js";
import { U as Users } from "../../../chunks/users.js";
const Cpu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "4",
        "y": "4",
        "width": "16",
        "height": "16",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "x": "9",
        "y": "9",
        "width": "6",
        "height": "6"
      }
    ],
    ["path", { "d": "M15 2v2" }],
    ["path", { "d": "M15 20v2" }],
    ["path", { "d": "M2 15h2" }],
    ["path", { "d": "M2 9h2" }],
    ["path", { "d": "M20 15h2" }],
    ["path", { "d": "M20 9h2" }],
    ["path", { "d": "M9 2v2" }],
    ["path", { "d": "M9 20v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cpu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "7 10 12 15 17 10" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "15",
        "y2": "3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "download" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hard_drive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "22",
        "x2": "2",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "path",
      {
        "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "6.01",
        "y1": "16",
        "y2": "16"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10.01",
        "y1": "16",
        "y2": "16"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hard-drive" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M6 8h.001" }],
    ["path", { "d": "M10 8h.001" }],
    ["path", { "d": "M14 8h.001" }],
    ["path", { "d": "M18 8h.001" }],
    ["path", { "d": "M8 12h.001" }],
    ["path", { "d": "M12 12h.001" }],
    ["path", { "d": "M16 12h.001" }],
    ["path", { "d": "M7 16h10" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "keyboard" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Memory_stick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M6 19v-3" }],
    ["path", { "d": "M10 19v-3" }],
    ["path", { "d": "M14 19v-3" }],
    ["path", { "d": "M18 19v-3" }],
    ["path", { "d": "M8 11V9" }],
    ["path", { "d": "M16 11V9" }],
    ["path", { "d": "M12 11V9" }],
    ["path", { "d": "M2 15h20" }],
    [
      "path",
      {
        "d": "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "memory-stick" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Monitor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "14",
        "x": "2",
        "y": "3",
        "rx": "2"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "16",
        "y1": "21",
        "y2": "21"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "17",
        "y2": "21"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "monitor" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["polygon", { "points": "5 3 19 12 5 21 5 3" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "play" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const guides = [
    {
      id: "pc-building",
      title: "Complete PC Building Guide",
      description: "Step-by-step guide to building your first gaming PC",
      duration: "45 min read",
      level: "Beginner",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "cpu-selection",
      title: "How to Choose the Right CPU",
      description: "Understanding CPU specifications and choosing the best processor for your needs",
      duration: "20 min read",
      level: "Intermediate",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop"
    },
    {
      id: "gpu-comparison",
      title: "GPU Comparison Guide",
      description: "Compare graphics cards and find the perfect GPU for gaming and productivity",
      duration: "30 min read",
      level: "Intermediate",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400&h=300&fit=crop"
    },
    {
      id: "storage-options",
      title: "Storage Solutions Explained",
      description: "SSD vs HDD: Understanding storage options and choosing the right solution",
      duration: "15 min read",
      level: "Beginner",
      icon: Hard_drive,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-oaf8f7_START -->${$$result.title = `<title>Learn More - TechStore</title>`, ""}<meta name="description" content="Educational resources, guides, and tutorials to help you understand computer hardware and build the perfect system."><!-- HEAD_svelte-oaf8f7_END -->`, ""}  <section class="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20" data-svelte-h="svelte-qb5ez"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl md:text-6xl font-bold mb-6">Learn More</h1> <p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">Master computer hardware with our comprehensive guides, tutorials, and resources</p></div></section>  <section class="py-8 bg-white border-b border-gray-200"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-wrap gap-4"><button class="${"px-6 py-3 rounded-lg font-medium transition-colors " + escape(
    "bg-primary-600 text-white",
    true
  )}">${validate_component(Book_open, "BookOpen").$$render($$result, { class: "h-5 w-5 inline mr-2" }, {}, {})}
				Guides &amp; Articles</button> <button class="${"px-6 py-3 rounded-lg font-medium transition-colors " + escape(
    "bg-gray-100 text-gray-700 hover:bg-gray-200",
    true
  )}">${validate_component(Play, "Play").$$render($$result, { class: "h-5 w-5 inline mr-2" }, {}, {})}
				Video Tutorials</button> <button class="${"px-6 py-3 rounded-lg font-medium transition-colors " + escape(
    "bg-gray-100 text-gray-700 hover:bg-gray-200",
    true
  )}">${validate_component(Download, "Download").$$render($$result, { class: "h-5 w-5 inline mr-2" }, {}, {})}
				Tools &amp; Resources</button></div></div></section>  ${`<section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-jlxbu4"><h2 class="text-3xl font-bold text-gray-900 mb-4">Comprehensive Guides</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">In-depth articles and guides to help you understand computer hardware and make informed decisions</p></div> <div class="grid md:grid-cols-2 gap-8">${each(guides, (guide) => {
    return `<div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"><div class="relative"><img${add_attribute("src", guide.image, 0)}${add_attribute("alt", guide.title, 0)} class="w-full h-48 object-cover"> <div class="absolute top-4 left-4"><span class="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">${escape(guide.level)}</span> </div></div> <div class="p-6"><div class="flex items-center mb-3">${validate_component(guide.icon || missing_component, "svelte:component").$$render($$result, { class: "h-6 w-6 text-primary-600 mr-2" }, {}, {})} <span class="text-sm text-gray-500">${escape(guide.duration)}</span></div> <h3 class="text-xl font-semibold text-gray-900 mb-3">${escape(guide.title)}</h3> <p class="text-gray-600 mb-4">${escape(guide.description)}</p> <button class="text-primary-600 hover:text-primary-700 font-medium flex items-center">Read Guide
								${validate_component(Arrow_right, "ArrowRight").$$render($$result, { class: "h-4 w-4 ml-2" }, {}, {})} </button></div> </div>`;
  })}</div></div></section>`} ${``} ${``}  <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-rupgaj"><h2 class="text-3xl font-bold text-gray-900 mb-4">Hardware Categories</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">Explore our educational content organized by hardware categories</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">${validate_component(Cpu, "Cpu").$$render(
    $$result,
    {
      class: "h-12 w-12 text-blue-600 mx-auto mb-4"
    },
    {},
    {}
  )} <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-1193igj">Processors</h3> <p class="text-gray-600 text-sm mb-4" data-svelte-h="svelte-1pwx8wm">CPU guides, comparisons, and optimization tips</p> <a href="/products?category=CPU" class="text-blue-600 hover:text-blue-700 font-medium text-sm" data-svelte-h="svelte-1advh5w">Learn More →</a></div> <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">${validate_component(Monitor, "Monitor").$$render(
    $$result,
    {
      class: "h-12 w-12 text-green-600 mx-auto mb-4"
    },
    {},
    {}
  )} <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-11zt6lm">Graphics Cards</h3> <p class="text-gray-600 text-sm mb-4" data-svelte-h="svelte-1rgvzw3">GPU selection, gaming performance, and benchmarks</p> <a href="/products?category=GPU" class="text-green-600 hover:text-green-700 font-medium text-sm" data-svelte-h="svelte-ucxzic">Learn More →</a></div> <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">${validate_component(Memory_stick, "MemoryStick").$$render(
    $$result,
    {
      class: "h-12 w-12 text-purple-600 mx-auto mb-4"
    },
    {},
    {}
  )} <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-1k5rgi0">Memory &amp; Storage</h3> <p class="text-gray-600 text-sm mb-4" data-svelte-h="svelte-18qsjne">RAM, SSDs, HDDs, and storage optimization</p> <a href="/products?category=RAM" class="text-purple-600 hover:text-purple-700 font-medium text-sm" data-svelte-h="svelte-1tjcnqe">Learn More →</a></div> <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">${validate_component(Keyboard, "Keyboard").$$render(
    $$result,
    {
      class: "h-12 w-12 text-orange-600 mx-auto mb-4"
    },
    {},
    {}
  )} <h3 class="text-lg font-semibold text-gray-900 mb-2" data-svelte-h="svelte-1upz8cz">Peripherals</h3> <p class="text-gray-600 text-sm mb-4" data-svelte-h="svelte-1islw29">Keyboards, mice, monitors, and accessories</p> <a href="/products?category=Peripherals" class="text-orange-600 hover:text-orange-700 font-medium text-sm" data-svelte-h="svelte-1edkds5">Learn More →</a></div></div></div></section>  <section class="py-16 bg-gray-50"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="bg-white rounded-2xl p-8 shadow-sm">${validate_component(Users, "Users").$$render(
    $$result,
    {
      class: "h-16 w-16 text-primary-600 mx-auto mb-6"
    },
    {},
    {}
  )} <h2 class="text-3xl font-bold text-gray-900 mb-4" data-svelte-h="svelte-1dou8vl">Join Our Community</h2> <p class="text-lg text-gray-600 mb-8" data-svelte-h="svelte-rmc7tz">Connect with fellow hardware enthusiasts, share builds, and get expert advice from our community</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-svelte-h="svelte-zgmpki"><button class="btn btn-primary">Join Forum</button> <button class="btn btn-secondary">Discord Server</button></div></div></div></section>  <section class="py-16 bg-primary-600 text-white" data-svelte-h="svelte-1yi8veo"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-bold mb-4">Stay Updated</h2> <p class="text-xl text-primary-100 mb-8">Get the latest guides, tutorials, and hardware news delivered to your inbox</p> <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"> <button class="btn bg-accent-600 hover:bg-accent-700 text-white">Subscribe</button></div></div></section>`;
});
export {
  Page as default
};
