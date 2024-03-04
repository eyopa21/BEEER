CREATE TABLE "public"."replies" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "replier_id" uuid NOT NULL, "comment_id" uuid NOT NULL, "reply" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("comment_id") REFERENCES "public"."comments"("id") ON UPDATE cascade ON DELETE set default, FOREIGN KEY ("replier_id") REFERENCES "public"."authors"("id") ON UPDATE cascade ON DELETE set default);
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
CREATE TRIGGER "set_public_replies_updated_at"
BEFORE UPDATE ON "public"."replies"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_replies_updated_at" ON "public"."replies"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
