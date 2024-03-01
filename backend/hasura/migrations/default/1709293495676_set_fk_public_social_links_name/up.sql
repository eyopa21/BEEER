alter table "public"."social_links"
  add constraint "social_links_name_fkey"
  foreign key ("name")
  references "public"."social_medias_enum"
  ("name") on update cascade on delete set default;
