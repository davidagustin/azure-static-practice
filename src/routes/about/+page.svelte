<script lang="ts">
	import { Users, Award, Target, Heart, Shield, Truck } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About Us - TechStore</title>
	<meta name="description" content="Learn about TechStore's mission to provide premium computer hardware and exceptional customer service." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-6xl font-bold mb-6">About TechStore</h1>
		<p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
			Your trusted partner for premium computer hardware since 2010
		</p>
	</div>
</section>

<!-- Mission & Vision -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
				<p class="text-lg text-gray-600 mb-6">
					To provide cutting-edge computer hardware solutions that empower individuals and businesses to achieve their technological goals. We believe that quality hardware is the foundation of digital success.
				</p>
				<p class="text-lg text-gray-600">
					From gaming enthusiasts to professional developers, we serve customers who demand the best performance, reliability, and innovation in their computing experience.
				</p>
			</div>
			<div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
				<Target class="h-16 w-16 text-primary-600 mb-4" />
				<h3 class="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
				<p class="text-gray-600">
					To be the leading destination for premium computer hardware, known for exceptional quality, expert guidance, and unparalleled customer support.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				These principles guide everything we do and shape our relationship with customers
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-xl shadow-sm">
				<Award class="h-12 w-12 text-primary-600 mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
				<p class="text-gray-600">
					We only stock products from trusted manufacturers and thoroughly test everything we sell to ensure it meets our high standards.
				</p>
			</div>
			
			<div class="bg-white p-6 rounded-xl shadow-sm">
				<Heart class="h-12 w-12 text-accent-600 mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
				<p class="text-gray-600">
					Your satisfaction is our priority. We provide personalized recommendations and support to help you make the best choices for your needs.
				</p>
			</div>
			
			<div class="bg-white p-6 rounded-xl shadow-sm">
				<Shield class="h-12 w-12 text-green-600 mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Trust & Reliability</h3>
				<p class="text-gray-600">
					We build lasting relationships through transparency, honest pricing, and reliable service that you can count on.
				</p>
			</div>
			
			<div class="bg-white p-6 rounded-xl shadow-sm">
				<Truck class="h-12 w-12 text-blue-600 mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Fast & Secure</h3>
				<p class="text-gray-600">
					Quick, secure shipping and easy returns ensure you get your products when you need them, hassle-free.
				</p>
			</div>
			
			<div class="bg-white p-6 rounded-xl shadow-sm">
				<Users class="h-12 w-12 text-purple-600 mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
				<p class="text-gray-600">
					Our knowledgeable staff stays current with the latest technology trends to provide you with expert guidance.
				</p>
			</div>
			
			<div class="bg-white p-6 rounded-xl shadow-sm">
				<Award class="h-12 w-12 text-orange-600 mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
				<p class="text-gray-600">
					We embrace new technologies and continuously improve our offerings to stay ahead of the curve.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Company Stats -->
<section class="py-16 bg-primary-600 text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-4xl font-bold mb-2">13+</div>
				<div class="text-primary-100">Years of Experience</div>
			</div>
			<div>
				<div class="text-4xl font-bold mb-2">50K+</div>
				<div class="text-primary-100">Happy Customers</div>
			</div>
			<div>
				<div class="text-4xl font-bold mb-2">1000+</div>
				<div class="text-primary-100">Products Available</div>
			</div>
			<div>
				<div class="text-4xl font-bold mb-2">24/7</div>
				<div class="text-primary-100">Customer Support</div>
			</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Passionate experts dedicated to providing you with the best computer hardware solutions
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
					<span class="text-2xl font-bold text-white">JD</span>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">John Davis</h3>
				<p class="text-primary-600 font-medium mb-3">Founder & CEO</p>
				<p class="text-gray-600">
					15+ years in computer hardware industry. Passionate about bringing cutting-edge technology to customers.
				</p>
			</div>
			
			<div class="text-center">
				<div class="w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
					<span class="text-2xl font-bold text-white">SM</span>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">Sarah Martinez</h3>
				<p class="text-primary-600 font-medium mb-3">Technical Director</p>
				<p class="text-gray-600">
					Expert in system architecture and performance optimization. Ensures all products meet our quality standards.
				</p>
			</div>
			
			<div class="text-center">
				<div class="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
					<span class="text-2xl font-bold text-white">MC</span>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h3>
				<p class="text-primary-600 font-medium mb-3">Customer Success Manager</p>
				<p class="text-gray-600">
					Dedicated to ensuring every customer has an exceptional experience with personalized support.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Dream System?</h2>
		<p class="text-lg text-gray-600 mb-8">
			Join thousands of satisfied customers who trust TechStore for their computer hardware needs.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/products" class="btn btn-primary">
				Shop Now
			</a>
			<a href="/contact" class="btn btn-secondary">
				Get in Touch
			</a>
		</div>
	</div>
</section> 