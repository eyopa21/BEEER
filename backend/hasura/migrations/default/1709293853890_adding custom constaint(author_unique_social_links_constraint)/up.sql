ALTER TABLE social_links
ADD CONSTRAINT author_unique_social_links_constraint UNIQUE (author_id, name);
