alter table "public"."social_links" drop constraint "social_links_pkey";
alter table "public"."social_links"
    add constraint "social_links_pkey"
    primary key ("id");
