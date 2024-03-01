alter table "public"."social_links" alter column "icon" drop not null;
alter table "public"."social_links" add column "icon" text;
