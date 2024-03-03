alter table "public"."blogs" alter column "tags" drop not null;
alter table "public"."blogs" add column "tags" text;
