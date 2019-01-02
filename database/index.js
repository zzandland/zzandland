const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zzandland_website',
  password: 'ye',
});

pool.connect(() => console.log('postgres connected'));

pool.getPosts = (callback) => {
  const query = `
    SELECT
      post.id,
      post.created_at, 
      post.updated_at, 
      post.image_url, 
      post.title,
      post.body,
      post.tag,
      "user".id AS user_id,
      "user".first_name,
      "user".last_name,
      "user".email,
      "user".image_url AS user_image_url
    FROM
      post
    INNER JOIN "user" ON post.author = "user".id;
  `;
  pool.query(query)
    .then(res => callback(null, res))
    .catch(e => callback(e, null))
}

module.exports = pool;
