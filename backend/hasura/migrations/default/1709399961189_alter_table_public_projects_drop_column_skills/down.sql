alter table "public"."projects" alter column "skills" drop not null;
alter table "public"."projects" add column "skills" text;
