import { sqliteTable, text, integer, real, uniqueIndex, primaryKey } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable(
	'users',
	{
		id: text('id').primaryKey(),
		email: text('email').unique().notNull(),
		name: text('name'),
		image: text('image'),
		kindeId: text('kinde_id').notNull(),
		createdAt: text('created_at')
			.default(sql`(CURRENT_TIMESTAMP)`)
			.notNull(),
		updatedAt: text('updated_at')
			.default(sql`(CURRENT_TIMESTAMP)`)
			.notNull()
	},
	(table) => ({
		emailIdx: uniqueIndex('email_idx').on(table.email)
	})
);

export const groups = sqliteTable('groups', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	inviteCode: text('invite_code').unique().notNull(),
	createdAt: text('created_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull(),
	updatedAt: text('updated_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull()
});

export const groupMembers = sqliteTable(
	'group_members',
	{
		id: text('id').primaryKey(),
		userId: text('user_id')
			.notNull()
			.references(() => users.id),
		groupId: text('group_id')
			.notNull()
			.references(() => groups.id),
		role: text('role', { enum: ['member', 'admin'] })
			.default('member')
			.notNull(),
		joinedAt: text('joined_at')
			.default(sql`(CURRENT_TIMESTAMP)`)
			.notNull()
	},
	(table) => ({
		uniqComposite: uniqueIndex('user_group_unique').on(table.userId, table.groupId)
	})
);

export const restaurants = sqliteTable('restaurants', {
	id: text('id').primaryKey(),
	externalId: text('external_id').unique().notNull(),
	name: text('name').notNull(),
	address: text('address').notNull(),
	cuisine: text('cuisine').notNull(),
	priceRange: integer('price_range').notNull(),
	latitude: real('latitude').notNull(),
	longitude: real('longitude').notNull(),
	isOpen: integer('is_open', { mode: 'boolean' }).notNull()
});

export const favorites = sqliteTable(
	'favorites',
	{
		id: text('id').primaryKey(),
		userId: text('user_id')
			.notNull()
			.references(() => users.id),
		restaurantId: text('restaurant_id')
			.notNull()
			.references(() => restaurants.id),
		addedAt: text('added_at')
			.default(sql`(CURRENT_TIMESTAMP)`)
			.notNull()
	},
	(table) => ({
		uniqComposite: uniqueIndex('user_restaurant_unique').on(table.userId, table.restaurantId)
	})
);

export const restaurantRecommendations = sqliteTable('restaurant_recommendations', {
	id: text('id').primaryKey(),
	groupId: text('group_id')
		.notNull()
		.references(() => groups.id),
	restaurantId: text('restaurant_id')
		.notNull()
		.references(() => restaurants.id),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	mealType: text('meal_type', { enum: ['breakfast', 'lunch', 'dinner'] }).notNull(),
	recommendedAt: text('recommended_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull()
});
