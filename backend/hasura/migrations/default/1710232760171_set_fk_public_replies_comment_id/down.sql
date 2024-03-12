alter table "public"."replies" drop constraint "replies_comment_id_fkey",
  add constraint "replies_comment_id_fkey"
  foreign key ("comment_id")
  references "public"."comments"
  ("id") on update cascade on delete set default;
