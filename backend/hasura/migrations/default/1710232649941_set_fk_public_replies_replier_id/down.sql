alter table "public"."replies" drop constraint "replies_replier_id_fkey",
  add constraint "replies_replier_id_fkey"
  foreign key ("replier_id")
  references "public"."authors"
  ("id") on update cascade on delete cascade;
