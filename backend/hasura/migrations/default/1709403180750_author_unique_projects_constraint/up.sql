ALTER TABLE projects
ADD CONSTRAINT author_unique_projects_constraint UNIQUE (author_id, title);
