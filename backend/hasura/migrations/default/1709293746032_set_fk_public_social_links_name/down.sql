alter table "public"."social_links" drop constraint "social_links_name_fkey",
  add constraint "social_links_name_fkey"
  foreign key ("name")
  references "public"."social_medias_enum"
  ("name") on update restrict on delete restrict;
