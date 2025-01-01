ALTER TABLE `restaurants` RENAME COLUMN `price_range` TO `price`;--> statement-breakpoint
ALTER TABLE `restaurants` ADD `image` text;--> statement-breakpoint
ALTER TABLE `restaurants` ADD `rating` real NOT NULL;--> statement-breakpoint
ALTER TABLE `restaurants` ADD `menu_url` text;--> statement-breakpoint
ALTER TABLE `restaurants` ADD `url` text;--> statement-breakpoint
ALTER TABLE `restaurants` DROP COLUMN `cuisine`;--> statement-breakpoint
ALTER TABLE `restaurants` DROP COLUMN `is_open`;