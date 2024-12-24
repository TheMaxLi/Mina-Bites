CREATE TABLE `favorites` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`restaurant_id` integer NOT NULL,
	`added_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `group_members` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`group_id` integer NOT NULL,
	`role` text DEFAULT 'member' NOT NULL,
	`joined_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `groups` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`invite_code` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `restaurant_recommendations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`group_id` text NOT NULL,
	`restaurant_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`meal_type` text NOT NULL,
	`recommended_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `restaurants` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`external_id` integer NOT NULL,
	`name` text NOT NULL,
	`address` text NOT NULL,
	`cuisine` text NOT NULL,
	`price_range` integer NOT NULL,
	`latitude` real NOT NULL,
	`longitude` real NOT NULL,
	`is_open` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`name` text,
	`image` text,
	`kinde_id` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`current_group_id` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `favorites_id_unique` ON `favorites` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_restaurant_unique` ON `favorites` (`user_id`,`restaurant_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `group_members_id_unique` ON `group_members` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_group_unique` ON `group_members` (`user_id`,`group_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `groups_id_unique` ON `groups` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `groups_invite_code_unique` ON `groups` (`invite_code`);--> statement-breakpoint
CREATE UNIQUE INDEX `restaurant_recommendations_id_unique` ON `restaurant_recommendations` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `restaurants_id_unique` ON `restaurants` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `restaurants_external_id_unique` ON `restaurants` (`external_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);