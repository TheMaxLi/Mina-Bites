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

export interface UserInput {
	email: string;
	name?: string | null;
	image?: string | null;
	kindeId: string;
}

export interface User {
	id: number;
	email: string;
	name: string | null;
	image: string | null;
	kindeId: string;
	isNewUser: boolean;
}

// Types for Groups
export interface Group {
	id: number;
	name: string;
	inviteCode: string;
	createdAt: string;
	updatedAt: string;
}

// Types for Group Members
export type GroupMemberRole = 'member' | 'admin';

export interface GroupMember {
	id: number;
	userId: number;
	groupId: number;
	role: GroupMemberRole;
	joinedAt: string;
}

// Types for Favorites
export interface Favorite {
	id: number;
	userId: number;
	restaurantId: number;
	addedAt: string;
}

// Types for Restaurant Recommendations
export type MealType = 'breakfast' | 'lunch' | 'dinner';

export interface RestaurantRecommendation {
	id: number;
	groupId: number;
	restaurantId: number;
	userId: number;
	mealType: MealType;
	recommendedAt: string;
}

// Optional: Insert Types (without auto-generated fields)
export type NewUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type NewGroup = Omit<Group, 'id' | 'createdAt' | 'updatedAt'>;
export type NewGroupMember = Omit<GroupMember, 'id' | 'joinedAt'>;
export type NewRestaurant = Omit<Restaurant, 'id'>;
export type NewFavorite = Omit<Favorite, 'id' | 'addedAt'>;
export type NewRestaurantRecommendation = Omit<RestaurantRecommendation, 'id' | 'recommendedAt'>;
