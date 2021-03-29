INSERT INTO roles(title)
VALUES
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions(role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users(role_id, email, first_name, last_name)
VALUES
(1, 'camglowicki@hotmail.com', Cameron, Glowicki);

INSERT INTO blog_categories(label, description)
VALUES
('Lifestyle', 'category description here');

INSERT INTO blog_posts(author_id, title, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'X', 'xxxxxx', 'shabs.jpeg', 1, 'tech', 'lifestyle', 'shabs.jpeg', 'Image');

INSERT INTO blog_post_comments(post_id, author_id, comment)
VALUES
(1, 1, 'This blog changed my life');

INSERT INTO blog_post_categories(post_id, category_id)
VALUES
(1, 4);