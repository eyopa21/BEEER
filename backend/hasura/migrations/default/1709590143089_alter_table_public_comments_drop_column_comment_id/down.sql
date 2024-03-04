alter table "public"."comments" alter column "comment_id" drop not null;
alter table "public"."comments" add column "comment_id" uuid;
