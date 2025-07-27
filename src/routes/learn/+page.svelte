<script lang="ts">
	import { BookOpen, Monitor, Cpu, HardDrive, MemoryStick, Mouse, Keyboard, Headphones, ArrowRight, Play, Download, Users } from 'lucide-svelte';

	let activeTab = 'guides';

	const guides = [
		{
			id: 'pc-building',
			title: 'Complete PC Building Guide',
			description: 'Step-by-step guide to building your first gaming PC',
			duration: '45 min read',
			level: 'Beginner',
			icon: Monitor,
			image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
		},
		{
			id: 'cpu-selection',
			title: 'How to Choose the Right CPU',
			description: 'Understanding CPU specifications and choosing the best processor for your needs',
			duration: '20 min read',
			level: 'Intermediate',
			icon: Cpu,
			image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop'
		},
		{
			id: 'gpu-comparison',
			title: 'GPU Comparison Guide',
			description: 'Compare graphics cards and find the perfect GPU for gaming and productivity',
			duration: '30 min read',
			level: 'Intermediate',
			icon: Monitor,
			image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400&h=300&fit=crop'
		},
		{
			id: 'storage-options',
			title: 'Storage Solutions Explained',
			description: 'SSD vs HDD: Understanding storage options and choosing the right solution',
			duration: '15 min read',
			level: 'Beginner',
			icon: HardDrive,
			image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
		}
	];

	const tutorials = [
		{
			id: 'overclocking',
			title: 'Safe CPU Overclocking',
			description: 'Learn how to safely overclock your processor for better performance',
			duration: '25 min',
			type: 'Video',
			level: 'Advanced',
			icon: Play
		},
		{
			id: 'cable-management',
			title: 'Cable Management Masterclass',
			description: 'Professional techniques for clean and efficient cable management',
			duration: '18 min',
			type: 'Video',
			level: 'Intermediate',
			icon: Play
		},
		{
			id: 'thermal-paste',
			title: 'Thermal Paste Application',
			description: 'Proper thermal paste application for optimal CPU cooling',
			duration: '12 min',
			type: 'Video',
			level: 'Beginner',
			icon: Play
		},
		{
			id: 'bios-setup',
			title: 'BIOS Configuration Guide',
			description: 'Essential BIOS settings for optimal system performance',
			duration: '22 min',
			type: 'Video',
			level: 'Intermediate',
			icon: Play
		}
	];

	const resources = [
		{
			id: 'compatibility-checker',
			title: 'PC Part Compatibility Checker',
			description: 'Interactive tool to check if your chosen components are compatible',
			type: 'Tool',
			icon: Monitor
		},
		{
			id: 'performance-calculator',
			title: 'Performance Calculator',
			description: 'Calculate expected performance for your PC build',
			type: 'Tool',
			icon: Cpu
		},
		{
			id: 'wattage-calculator',
			title: 'Power Supply Calculator',
			description: 'Determine the right power supply wattage for your build',
			type: 'Tool',
			icon: HardDrive
		},
		{
			id: 'benchmark-database',
			title: 'Benchmark Database',
			description: 'Comprehensive database of component benchmarks and comparisons',
			type: 'Database',
			icon: MemoryStick
		}
	];
</script>

<svelte:head>
	<title>Learn More - TechStore</title>
	<meta name="description" content="Educational resources, guides, and tutorials to help you understand computer hardware and build the perfect system." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-6xl font-bold mb-6">Learn More</h1>
		<p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
			Master computer hardware with our comprehensive guides, tutorials, and resources
		</p>
	</div>
</section>

<!-- Navigation Tabs -->
<section class="py-8 bg-white border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap gap-4">
			<button
				on:click={() => activeTab = 'guides'}
				class="px-6 py-3 rounded-lg font-medium transition-colors {activeTab === 'guides' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
			>
				<BookOpen class="h-5 w-5 inline mr-2" />
				Guides & Articles
			</button>
			<button
				on:click={() => activeTab = 'tutorials'}
				class="px-6 py-3 rounded-lg font-medium transition-colors {activeTab === 'tutorials' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
			>
				<Play class="h-5 w-5 inline mr-2" />
				Video Tutorials
			</button>
			<button
				on:click={() => activeTab = 'resources'}
				class="px-6 py-3 rounded-lg font-medium transition-colors {activeTab === 'resources' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
			>
				<Download class="h-5 w-5 inline mr-2" />
				Tools & Resources
			</button>
		</div>
	</div>
</section>

<!-- Content Sections -->
{#if activeTab === 'guides'}
	<section class="py-16 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Comprehensive Guides</h2>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					In-depth articles and guides to help you understand computer hardware and make informed decisions
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				{#each guides as guide}
					<div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
						<div class="relative">
							<img src={guide.image} alt={guide.title} class="w-full h-48 object-cover" />
							<div class="absolute top-4 left-4">
								<span class="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
									{guide.level}
								</span>
							</div>
						</div>
						<div class="p-6">
							<div class="flex items-center mb-3">
								<svelte:component this={guide.icon} class="h-6 w-6 text-primary-600 mr-2" />
								<span class="text-sm text-gray-500">{guide.duration}</span>
							</div>
							<h3 class="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
							<p class="text-gray-600 mb-4">{guide.description}</p>
							<button class="text-primary-600 hover:text-primary-700 font-medium flex items-center">
								Read Guide
								<ArrowRight class="h-4 w-4 ml-2" />
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if activeTab === 'tutorials'}
	<section class="py-16 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Step-by-step video tutorials to help you master computer hardware and building techniques
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each tutorials as tutorial}
					<div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
						<div class="relative">
							<div class="w-full h-48 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
								<Play class="h-16 w-16 text-white" />
							</div>
							<div class="absolute top-4 right-4">
								<span class="px-3 py-1 bg-accent-600 text-white text-sm font-medium rounded-full">
									{tutorial.level}
								</span>
							</div>
						</div>
						<div class="p-6">
							<div class="flex items-center justify-between mb-3">
								<div class="flex items-center">
									<svelte:component this={tutorial.icon} class="h-5 w-5 text-accent-600 mr-2" />
									<span class="text-sm text-gray-500">{tutorial.type}</span>
								</div>
								<span class="text-sm text-gray-500">{tutorial.duration}</span>
							</div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">{tutorial.title}</h3>
							<p class="text-gray-600 mb-4">{tutorial.description}</p>
							<button class="text-accent-600 hover:text-accent-700 font-medium flex items-center">
								Watch Tutorial
								<ArrowRight class="h-4 w-4 ml-2" />
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if activeTab === 'resources'}
	<section class="py-16 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Tools & Resources</h2>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Interactive tools and resources to help you plan and build your perfect system
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				{#each resources as resource}
					<div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
									<svelte:component this={resource.icon} class="h-6 w-6 text-primary-600" />
								</div>
							</div>
							<div class="flex-1">
								<div class="flex items-center justify-between mb-2">
									<h3 class="text-lg font-semibold text-gray-900">{resource.title}</h3>
									<span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
										{resource.type}
									</span>
								</div>
								<p class="text-gray-600 mb-4">{resource.description}</p>
								<button class="text-primary-600 hover:text-primary-700 font-medium flex items-center">
									Access Tool
									<ArrowRight class="h-4 w-4 ml-2" />
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Hardware Categories -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Hardware Categories</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Explore our educational content organized by hardware categories
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
				<Cpu class="h-12 w-12 text-blue-600 mx-auto mb-4" />
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Processors</h3>
				<p class="text-gray-600 text-sm mb-4">CPU guides, comparisons, and optimization tips</p>
				<a href="/products?category=CPU" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
					Learn More →
				</a>
			</div>

			<div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
				<Monitor class="h-12 w-12 text-green-600 mx-auto mb-4" />
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Graphics Cards</h3>
				<p class="text-gray-600 text-sm mb-4">GPU selection, gaming performance, and benchmarks</p>
				<a href="/products?category=GPU" class="text-green-600 hover:text-green-700 font-medium text-sm">
					Learn More →
				</a>
			</div>

			<div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
				<MemoryStick class="h-12 w-12 text-purple-600 mx-auto mb-4" />
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Memory & Storage</h3>
				<p class="text-gray-600 text-sm mb-4">RAM, SSDs, HDDs, and storage optimization</p>
				<a href="/products?category=RAM" class="text-purple-600 hover:text-purple-700 font-medium text-sm">
					Learn More →
				</a>
			</div>

			<div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
				<Keyboard class="h-12 w-12 text-orange-600 mx-auto mb-4" />
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Peripherals</h3>
				<p class="text-gray-600 text-sm mb-4">Keyboards, mice, monitors, and accessories</p>
				<a href="/products?category=Peripherals" class="text-orange-600 hover:text-orange-700 font-medium text-sm">
					Learn More →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Community Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="bg-white rounded-2xl p-8 shadow-sm">
			<Users class="h-16 w-16 text-primary-600 mx-auto mb-6" />
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
			<p class="text-lg text-gray-600 mb-8">
				Connect with fellow hardware enthusiasts, share builds, and get expert advice from our community
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button class="btn btn-primary">
					Join Forum
				</button>
				<button class="btn btn-secondary">
					Discord Server
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Newsletter Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
		<p class="text-xl text-primary-100 mb-8">
			Get the latest guides, tutorials, and hardware news delivered to your inbox
		</p>
		<div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
			<input
				type="email"
				placeholder="Enter your email"
				class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
			/>
			<button class="btn bg-accent-600 hover:bg-accent-700 text-white">
				Subscribe
			</button>
		</div>
	</div>
</section> 