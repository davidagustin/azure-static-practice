import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each } from "./ssr.js";
import { I as Icon, S as Shopping_cart } from "./shopping-cart.js";
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "eye" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => i + 1);
}
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  let { onAddToCart } = $$props;
  let { onViewDetails } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0) $$bindings.product(product);
  if ($$props.onAddToCart === void 0 && $$bindings.onAddToCart && onAddToCart !== void 0) $$bindings.onAddToCart(onAddToCart);
  if ($$props.onViewDetails === void 0 && $$bindings.onViewDetails && onViewDetails !== void 0) $$bindings.onViewDetails(onViewDetails);
  return `<div class="card group"><div class="relative overflow-hidden rounded-lg"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>  <div class="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors" aria-label="View details">${validate_component(Eye, "Eye").$$render($$result, { class: "h-4 w-4 text-gray-600" }, {}, {})}</button></div>  ${product.stock < 5 && product.stock > 0 ? `<div class="absolute top-2 left-2"><span class="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">Only ${escape(product.stock)} left</span></div>` : `${product.stock === 0 ? `<div class="absolute top-2 left-2" data-svelte-h="svelte-402gmd"><span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Out of Stock</span></div>` : ``}`}</div> <div class="p-4"> <div class="text-sm text-primary-600 font-medium mb-1">${escape(product.category)}</div>  <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">${escape(product.name)}</h3>  <p class="text-gray-600 text-sm mb-3 line-clamp-2">${escape(product.description)}</p>  <div class="flex items-center mb-3"><div class="flex items-center">${each(renderStars(product.rating), (star) => {
    return `${validate_component(Star, "Star").$$render(
      $$result,
      {
        class: "h-4 w-4 " + (star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300")
      },
      {},
      {}
    )}`;
  })}</div> <span class="text-sm text-gray-600 ml-2">(${escape(product.rating)})</span></div>  <div class="flex items-center justify-between"><div class="text-2xl font-bold text-gray-900">${escape(formatPrice(product.price))}</div> <button ${product.stock === 0 ? "disabled" : ""} class="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { class: "h-4 w-4 mr-2" }, {}, {})}
				Add to Cart</button></div></div></div>`;
});
const products = [
  {
    id: 1,
    name: "Intel Core i9-13900K",
    category: "CPU",
    price: 569.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "24-core, 32-thread processor with up to 5.8GHz boost clock",
    stock: 15,
    rating: 4.8,
    specs: {
      cores: 24,
      threads: 32,
      baseClock: "3.0 GHz",
      boostClock: "5.8 GHz",
      cache: "36MB"
    }
  },
  {
    id: 2,
    name: "NVIDIA RTX 4090",
    category: "GPU",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "24GB GDDR6X graphics card with ray tracing and DLSS 3.0",
    stock: 8,
    rating: 4.9,
    specs: {
      memory: "24GB GDDR6X",
      cores: "16384 CUDA Cores",
      boostClock: "2.52 GHz",
      power: "450W"
    }
  },
  {
    id: 3,
    name: "Samsung 990 PRO 2TB",
    category: "Storage",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "PCIe 4.0 NVMe SSD with up to 7,450 MB/s read speeds",
    stock: 25,
    rating: 4.7,
    specs: {
      capacity: "2TB",
      interface: "PCIe 4.0 x4",
      readSpeed: "7,450 MB/s",
      writeSpeed: "6,900 MB/s"
    }
  },
  {
    id: 4,
    name: "Corsair Vengeance 32GB DDR5",
    category: "RAM",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "32GB (2x16GB) DDR5-6000 memory kit with RGB lighting",
    stock: 30,
    rating: 4.6,
    specs: {
      capacity: "32GB (2x16GB)",
      speed: "DDR5-6000",
      timing: "CL36",
      voltage: "1.35V"
    }
  },
  {
    id: 5,
    name: "ASUS ROG Strix Z790-E",
    category: "Motherboard",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "ATX motherboard with WiFi 6E and PCIe 5.0 support",
    stock: 12,
    rating: 4.5,
    specs: {
      chipset: "Intel Z790",
      formFactor: "ATX",
      ramSlots: 4,
      pcieSlots: 3
    }
  },
  {
    id: 6,
    name: "Corsair H150i Elite Capellix",
    category: "Cooling",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "360mm AIO liquid cooler with RGB fans and Commander Core",
    stock: 18,
    rating: 4.4,
    specs: {
      radiatorSize: "360mm",
      fanCount: 3,
      noise: "28 dB",
      connector: "LGA 1700/1200"
    }
  },
  {
    id: 7,
    name: "Seasonic PRIME TX-1000",
    category: "Power Supply",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "1000W 80+ Titanium fully modular power supply",
    stock: 10,
    rating: 4.8,
    specs: {
      wattage: "1000W",
      efficiency: "80+ Titanium",
      modular: "Full",
      warranty: "12 years"
    }
  },
  {
    id: 8,
    name: "Lian Li O11 Dynamic EVO",
    category: "Case",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "Mid-tower case with tempered glass panels and excellent airflow",
    stock: 22,
    rating: 4.7,
    specs: {
      formFactor: "Mid-tower",
      material: "Steel/Tempered Glass",
      fanSupport: "10x 120mm",
      radiatorSupport: "360mm"
    }
  }
];
const categories = [
  { id: "all", name: "All Products" },
  { id: "CPU", name: "Processors" },
  { id: "GPU", name: "Graphics Cards" },
  { id: "Storage", name: "Storage" },
  { id: "RAM", name: "Memory" },
  { id: "Motherboard", name: "Motherboards" },
  { id: "Cooling", name: "Cooling" },
  { id: "Power Supply", name: "Power Supplies" },
  { id: "Case", name: "Cases" }
];
export {
  ProductCard as P,
  categories as c,
  products as p
};
