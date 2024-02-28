alter table "public"."profile_details"
  add constraint "profile_details_author_id_fkey"
  foreign key ("author_id")
  references "public"."authors"
  ("id") on update cascade on delete set default;
