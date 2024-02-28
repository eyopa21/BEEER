CREATE TABLE "public"."authors" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "beeer_name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "is_suspended" boolean NOT NULL DEFAULT false, "is_verified" boolean NOT NULL DEFAULT false, "is_deleted" boolean NOT NULL DEFAULT false, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("beeer_name"), UNIQUE ("email"));COMMENT ON TABLE "public"."authors" IS E'authors table';
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
CREATE TRIGGER "set_public_authors_updated_at"
BEFORE UPDATE ON "public"."authors"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_authors_updated_at" ON "public"."authors"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
