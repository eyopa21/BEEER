alter table "public"."blogs"
  add constraint "blogs_author_id_fkey"
  foreign key ("author_id")
  references "public"."authors"
  ("id") on update cascade on delete set default;
