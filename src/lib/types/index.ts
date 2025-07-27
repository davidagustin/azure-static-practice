export interface Product {
	id: number;
	name: string;
	category: string;
	price: number;
	image: string;
	description: string;
	stock: number;
	rating: number;
	specs: Record<string, string | number>;
}

export interface Category {
	id: string;
	name: string;
}

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface User {
	id: string;
	name: string;
	email: string;
}

export interface Order {
	id: string;
	userId: string;
	items: CartItem[];
	total: number;
	status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
	createdAt: Date;
} 