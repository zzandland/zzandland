DROP DATABASE IF EXISTS zzandland_website;

CREATE DATABASE zzandland_website;

\c zzandland_website;

CREATE TABLE IF NOT EXISTS "user"(
  id VARCHAR(10) PRIMARY KEY NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  image_url TEXT NULL
);

CREATE TABLE IF NOT EXISTS "post"(
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title VARCHAR(100) NOT NULL,
  author VARCHAR(10) REFERENCES "user"(ID),
  image_url TEXT NULL,
  body TEXT NOT NULL,
  tag VARCHAR(20)[]
);

CREATE TABLE IF NOT EXISTS "comment"(
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  body TEXT NOT NULL,
  author VARCHAR(10) REFERENCES "user"(ID),
  post VARCHAR(10) REFERENCES "post"(id),
  nested VARCHAR(10) REFERENCES "comment"(id)
);

INSERT INTO "user"(id,first_name,last_name,email,image_url) VALUES('a51bf99a4f','Si Yong','Kim','zzandland@gmail.com','https://s3-us-west-1.amazonaws.com/zzandland.io/portrait.jpeg');

INSERT INTO "post"(id,title,author,image_url,body,tag)
  VALUES('bf285b66f9','First Blog Post Mock','a51bf99a4f','https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shiba-inu-temperament-and-personality_canna-pet-1024x683.jpg','Lorem ipsum dolor amet thundercats humblebrag locavore flexitarian, paleo pour-over deep v VHS hexagon cardigan you probably have not heard of them. Green juice keffiyeh fashion axe tote bag health goth ugh XOXO chambray leggings selvage. Keffiyeh bitters cold-pressed cronut photo booth yr waistcoat mumblecore unicorn messenger bag tilde. Disrupt small batch hoodie tumeric twee ethical. Seitan wolf mlkshk master cleanse, humblebrag authentic pabst offal hella banh mi wayfarers tousled post-ironic 3 wolf moon. Flexitarian vape irony, pour-over ethical pabst chambray lyft ugh marfa chia taxidermy schlitz prism.','{javascript,react,ssr}');
