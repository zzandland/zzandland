DROP DATABASE IF EXISTS zzandland_website;

CREATE DATABASE zzandland_website;

\c zzandland_website;

CREATE TABLE IF NOT EXISTS blog_user(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  image_url TEXT NULL
);

CREATE TABLE IF NOT EXISTS blog_post(
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title VARCHAR(100) NOT NULL,
  author INTEGER REFERENCES blog_user(id),
  image_url TEXT NULL,
  body TEXT NOT NULL,
  tag VARCHAR(100)[]
);

CREATE TABLE IF NOT EXISTS blog_comment(
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  body TEXT NOT NULL,
  author INTEGER REFERENCES blog_user(id),
  post INTEGER REFERENCES blog_post(id)
);

CREATE TABLE IF NOT EXISTS self_experience(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  company VARCHAR(50) NULL,
  years SMALLINT NULL,
  description VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS self_education(
  id SERIAL PRIMARY KEY,
  institution VARCHAR(50) NOT NULL,
  degree VARCHAR(50) NOT NULL,
  start_year SMALLINT NOT NULL,
  end_year SMALLINT NULL,
  description VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS self_skill(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  proficiency REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS self_portfolio(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  client VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NULL,
  used_tech VARCHAR(150) NOT NULL,
  images TEXT NOT NULL,
  hyper_link TEXT NOT NULL
);
