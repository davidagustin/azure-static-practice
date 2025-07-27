import type { Product, Category } from '$lib/types';

export const products: Product[] = [
	{
		id: 1,
		name: 'Intel Core i9-13900K',
		category: 'CPU',
		price: 569.99,
		image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
		description: '24-core, 32-thread processor with up to 5.8GHz boost clock',
		stock: 15,
		rating: 4.8,
		specs: {
			cores: 24,
			threads: 32,
			baseClock: '3.0 GHz',
			boostClock: '5.8 GHz',
			cache: '36MB'
		}
	},
	{
		id: 2,
		name: 'NVIDIA RTX 4090',
		category: 'GPU',
		price: 1599.99,
		image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
		description: '24GB GDDR6X graphics card with ray tracing and DLSS 3.0',
		stock: 8,
		rating: 4.9,
		specs: {
			memory: '24GB GDDR6X',
			cores: '16384 CUDA Cores',
			boostClock: '2.52 GHz',
			power: '450W'
		}
	},
	{
		id: 3,
		name: 'Samsung 990 PRO 2TB',
		category: 'Storage',
		price: 199.99,
		image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
		description: 'PCIe 4.0 NVMe SSD with up to 7,450 MB/s read speeds',
		stock: 25,
		rating: 4.7,
		specs: {
			capacity: '2TB',
			interface: 'PCIe 4.0 x4',
			readSpeed: '7,450 MB/s',
			writeSpeed: '6,900 MB/s'
		}
	},
	{
		id: 4,
		name: 'Corsair Vengeance 32GB DDR5',
		category: 'RAM',
		price: 149.99,
		image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
		description: '32GB (2x16GB) DDR5-6000 memory kit with RGB lighting',
		stock: 30,
		rating: 4.6,
		specs: {
			capacity: '32GB (2x16GB)',
			speed: 'DDR5-6000',
			timing: 'CL36',
			voltage: '1.35V'
		}
	},
	{
		id: 5,
		name: 'ASUS ROG Strix Z790-E',
		category: 'Motherboard',
		price: 449.99,
		image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
		description: 'ATX motherboard with WiFi 6E and PCIe 5.0 support',
		stock: 12,
		rating: 4.5,
		specs: {
			chipset: 'Intel Z790',
			formFactor: 'ATX',
			ramSlots: 4,
			pcieSlots: 3
		}
	},
	{
		id: 6,
		name: 'Corsair H150i Elite Capellix',
		category: 'Cooling',
		price: 189.99,
		image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
		description: '360mm AIO liquid cooler with RGB fans and Commander Core',
		stock: 18,
		rating: 4.4,
		specs: {
			radiatorSize: '360mm',
			fanCount: 3,
			noise: '28 dB',
			connector: 'LGA 1700/1200'
		}
	},
	{
		id: 7,
		name: 'Seasonic PRIME TX-1000',
		category: 'Power Supply',
		price: 299.99,
		image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
		description: '1000W 80+ Titanium fully modular power supply',
		stock: 10,
		rating: 4.8,
		specs: {
			wattage: '1000W',
			efficiency: '80+ Titanium',
			modular: 'Full',
			warranty: '12 years'
		}
	},
	{
		id: 8,
		name: 'Lian Li O11 Dynamic EVO',
		category: 'Case',
		price: 169.99,
		image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
		description: 'Mid-tower case with tempered glass panels and excellent airflow',
		stock: 22,
		rating: 4.7,
		specs: {
			formFactor: 'Mid-tower',
			material: 'Steel/Tempered Glass',
			fanSupport: '10x 120mm',
			radiatorSupport: '360mm'
		}
	}
];

export const categories: Category[] = [
	{ id: 'all', name: 'All Products' },
	{ id: 'CPU', name: 'Processors' },
	{ id: 'GPU', name: 'Graphics Cards' },
	{ id: 'Storage', name: 'Storage' },
	{ id: 'RAM', name: 'Memory' },
	{ id: 'Motherboard', name: 'Motherboards' },
	{ id: 'Cooling', name: 'Cooling' },
	{ id: 'Power Supply', name: 'Power Supplies' },
	{ id: 'Case', name: 'Cases' }
]; 