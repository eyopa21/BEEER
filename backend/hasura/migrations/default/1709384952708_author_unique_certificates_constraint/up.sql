ALTER TABLE certificates
ADD CONSTRAINT author_unique_certificates_constraint UNIQUE (author_id, title);
