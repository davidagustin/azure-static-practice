type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/about": undefined;
	"/contact": undefined;
	"/faq": undefined;
	"/help": undefined;
	"/learn": undefined;
	"/products": undefined;
	"/support": undefined
};

export type RouteId = "/" | "/about" | "/contact" | "/faq" | "/help" | "/learn" | "/products" | "/support";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/about" | "/contact" | "/faq" | "/help" | "/learn" | "/products" | "/support";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.png";