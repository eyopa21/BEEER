BEGIN TRANSACTION;
ALTER TABLE "public"."social_links" DROP CONSTRAINT "social_links_pkey";

ALTER TABLE "public"."social_links"
    ADD CONSTRAINT "social_links_pkey" PRIMARY KEY ("author_id");
COMMIT TRANSACTION;
