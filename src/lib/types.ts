export type Restaurant = {
	id: string;
	alias: string;
	name: string;
	image_url: string;
	is_closed: boolean;
	url: string;
	review_count: number;
	categories: Category[];
	rating: number;
	coordinates: Coordinates;
	transactions: string[];
	price?: string;
	location: RestaurantLocation;
	phone: string;
	display_phone: string;
	distance: number;
	business_hours: BusinessHours[];
	attributes: Attributes;
};

export type Category = {
	alias: string;
	title: string;
};

export type Coordinates = {
	latitude: number;
	longitude: number;
};

export type RestaurantLocation = {
	address1: string | null;
	address2: string | null;
	address3: string | null;
	city: string;
	zip_code: string;
	country: string;
	state: string;
	display_address: string[];
};

export type BusinessHours = {
	open: OpenTime[];
	hours_type: string;
	is_open_now: boolean;
};

export type OpenTime = {
	is_overnight: boolean;
	start: string;
	end: string;
	day: number;
};

export type Attributes = {
	business_temp_closed: string | null;
	menu_url: string | null;
	open24_hours: boolean | null;
	waitlist_reservation: boolean | null;
};
