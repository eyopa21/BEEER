CREATE TABLE "public"."likes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "blog_id" uuid, "project_id" uuid, "certificate_id" uuid, "education_id" uuid, "liker_id" uuid NOT NULL, "type" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("liker_id") REFERENCES "public"."authors"("id") ON UPDATE cascade ON DELETE set default, FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON UPDATE cascade ON DELETE set default, FOREIGN KEY ("certificate_id") REFERENCES "public"."certificates"("id") ON UPDATE cascade ON DELETE set default, FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON UPDATE cascade ON DELETE set default, FOREIGN KEY ("education_id") REFERENCES "public"."educations"("id") ON UPDATE cascade ON DELETE set default);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_likes_updated_at"
BEFORE UPDATE ON "public"."likes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_likes_updated_at" ON "public"."likes"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
