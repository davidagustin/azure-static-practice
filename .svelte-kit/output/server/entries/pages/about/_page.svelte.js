import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { S as Shield, T as Truck } from "../../../chunks/truck.js";
import { U as Users } from "../../../chunks/users.js";
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "8", "r": "6" }],
    [
      "path",
      {
        "d": "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "award" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Target = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "target" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5zm5e0_START -->${$$result.title = `<title>About Us - TechStore</title>`, ""}<meta name="description" content="Learn about TechStore's mission to provide premium computer hardware and exceptional customer service."><!-- HEAD_svelte-5zm5e0_END -->`, ""}  <section class="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20" data-svelte-h="svelte-a0r4vn"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl md:text-6xl font-bold mb-6">About TechStore</h1> <p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">Your trusted partner for premium computer hardware since 2010</p></div></section>  <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid md:grid-cols-2 gap-12 items-center"><div data-svelte-h="svelte-1cs2376"><h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2> <p class="text-lg text-gray-600 mb-6">To provide cutting-edge computer hardware solutions that empower individuals and businesses to achieve their technological goals. We believe that quality hardware is the foundation of digital success.</p> <p class="text-lg text-gray-600">From gaming enthusiasts to professional developers, we serve customers who demand the best performance, reliability, and innovation in their computing experience.</p></div> <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">${validate_component(Target, "Target").$$render($$result, { class: "h-16 w-16 text-primary-600 mb-4" }, {}, {})} <h3 class="text-2xl font-semibold text-gray-900 mb-4" data-svelte-h="svelte-1e71mt9">Our Vision</h3> <p class="text-gray-600" data-svelte-h="svelte-1l2mc8c">To be the leading destination for premium computer hardware, known for exceptional quality, expert guidance, and unparalleled customer support.</p></div></div></div></section>  <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-euman2"><h2 class="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">These principles guide everything we do and shape our relationship with customers</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-white p-6 rounded-xl shadow-sm">${validate_component(Award, "Award").$$render($$result, { class: "h-12 w-12 text-primary-600 mb-4" }, {}, {})} <h3 class="text-xl font-semibold text-gray-900 mb-3" data-svelte-h="svelte-1yznl9z">Quality Excellence</h3> <p class="text-gray-600" data-svelte-h="svelte-tam8pu">We only stock products from trusted manufacturers and thoroughly test everything we sell to ensure it meets our high standards.</p></div> <div class="bg-white p-6 rounded-xl shadow-sm">${validate_component(Heart, "Heart").$$render($$result, { class: "h-12 w-12 text-accent-600 mb-4" }, {}, {})} <h3 class="text-xl font-semibold text-gray-900 mb-3" data-svelte-h="svelte-jlio42">Customer First</h3> <p class="text-gray-600" data-svelte-h="svelte-ery4jp">Your satisfaction is our priority. We provide personalized recommendations and support to help you make the best choices for your needs.</p></div> <div class="bg-white p-6 rounded-xl shadow-sm">${validate_component(Shield, "Shield").$$render($$result, { class: "h-12 w-12 text-green-600 mb-4" }, {}, {})} <h3 class="text-xl font-semibold text-gray-900 mb-3" data-svelte-h="svelte-1h46pni">Trust &amp; Reliability</h3> <p class="text-gray-600" data-svelte-h="svelte-1f1vdl7">We build lasting relationships through transparency, honest pricing, and reliable service that you can count on.</p></div> <div class="bg-white p-6 rounded-xl shadow-sm">${validate_component(Truck, "Truck").$$render($$result, { class: "h-12 w-12 text-blue-600 mb-4" }, {}, {})} <h3 class="text-xl font-semibold text-gray-900 mb-3" data-svelte-h="svelte-12gm337">Fast &amp; Secure</h3> <p class="text-gray-600" data-svelte-h="svelte-yn5fji">Quick, secure shipping and easy returns ensure you get your products when you need them, hassle-free.</p></div> <div class="bg-white p-6 rounded-xl shadow-sm">${validate_component(Users, "Users").$$render($$result, { class: "h-12 w-12 text-purple-600 mb-4" }, {}, {})} <h3 class="text-xl font-semibold text-gray-900 mb-3" data-svelte-h="svelte-4ejk2b">Expert Team</h3> <p class="text-gray-600" data-svelte-h="svelte-v87sv0">Our knowledgeable staff stays current with the latest technology trends to provide you with expert guidance.</p></div> <div class="bg-white p-6 rounded-xl shadow-sm">${validate_component(Award, "Award").$$render($$result, { class: "h-12 w-12 text-orange-600 mb-4" }, {}, {})} <h3 class="text-xl font-semibold text-gray-900 mb-3" data-svelte-h="svelte-1huoh8d">Innovation</h3> <p class="text-gray-600" data-svelte-h="svelte-4s2et5">We embrace new technologies and continuously improve our offerings to stay ahead of the curve.</p></div></div></div></section>  <section class="py-16 bg-primary-600 text-white" data-svelte-h="svelte-1s1hev3"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid md:grid-cols-4 gap-8 text-center"><div><div class="text-4xl font-bold mb-2">13+</div> <div class="text-primary-100">Years of Experience</div></div> <div><div class="text-4xl font-bold mb-2">50K+</div> <div class="text-primary-100">Happy Customers</div></div> <div><div class="text-4xl font-bold mb-2">1000+</div> <div class="text-primary-100">Products Available</div></div> <div><div class="text-4xl font-bold mb-2">24/7</div> <div class="text-primary-100">Customer Support</div></div></div></div></section>  <section class="py-16 bg-white" data-svelte-h="svelte-ybzceh"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">Passionate experts dedicated to providing you with the best computer hardware solutions</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="text-center"><div class="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center"><span class="text-2xl font-bold text-white">JD</span></div> <h3 class="text-xl font-semibold text-gray-900 mb-2">John Davis</h3> <p class="text-primary-600 font-medium mb-3">Founder &amp; CEO</p> <p class="text-gray-600">15+ years in computer hardware industry. Passionate about bringing cutting-edge technology to customers.</p></div> <div class="text-center"><div class="w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center"><span class="text-2xl font-bold text-white">SM</span></div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Sarah Martinez</h3> <p class="text-primary-600 font-medium mb-3">Technical Director</p> <p class="text-gray-600">Expert in system architecture and performance optimization. Ensures all products meet our quality standards.</p></div> <div class="text-center"><div class="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center"><span class="text-2xl font-bold text-white">MC</span></div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h3> <p class="text-primary-600 font-medium mb-3">Customer Success Manager</p> <p class="text-gray-600">Dedicated to ensuring every customer has an exceptional experience with personalized support.</p></div></div></div></section>  <section class="py-16 bg-gray-50" data-svelte-h="svelte-10wytyc"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Dream System?</h2> <p class="text-lg text-gray-600 mb-8">Join thousands of satisfied customers who trust TechStore for their computer hardware needs.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/products" class="btn btn-primary">Shop Now</a> <a href="/contact" class="btn btn-secondary">Get in Touch</a></div></div></section>`;
});
export {
  Page as default
};
