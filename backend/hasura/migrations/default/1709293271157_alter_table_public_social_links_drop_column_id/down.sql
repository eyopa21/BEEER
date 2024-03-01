alter table "public"."social_links" alter column "id" set default nextval('social_links_id_seq'::regclass);
alter table "public"."social_links" alter column "id" drop not null;
alter table "public"."social_links" add column "id" int4;
