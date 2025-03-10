-- Supprimer les tables si elles existent
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

-- Création de la table users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    "firstName" VARCHAR(45) NOT NULL,
    "lastName" VARCHAR(45) NOT NULL,
    "emailId" VARCHAR(45) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Création de la table posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    description VARCHAR(1000) NOT NULL,
    "imagePath" VARCHAR(1000) NOT NULL,
    "likeCount" INT NOT NULL DEFAULT 0,
    "dislikeCount" INT NOT NULL DEFAULT 0,
    "datetimeCreated" TIMESTAMP NOT NULL,
    "addedByUserId" INT NOT NULL,
    CONSTRAINT fk_user_posts FOREIGN KEY ("addedByUserId") REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Création de la table comments
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    "postId" INT NOT NULL,
    comment VARCHAR(1000) NOT NULL,
    "datetimeCreated" TIMESTAMP NOT NULL,
    "addedByUserId" INT NOT NULL,
    CONSTRAINT fk_post_comments FOREIGN KEY ("postId") REFERENCES posts (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_user_comments FOREIGN KEY ("addedByUserId") REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);
