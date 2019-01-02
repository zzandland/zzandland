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
      blog_post.id,
      blog_post.created_at, 
      blog_post.updated_at, 
      blog_post.image_url, 
      blog_post.title,
      blog_post.body,
      blog_post.tag,
      blog_user.id AS user_id,
      blog_user.first_name,
      blog_user.last_name,
      blog_user.email,
      blog_user.image_url AS user_image_url
    FROM
      blog_post
    INNER JOIN blog_user ON blog_post.author = blog_user.id;
  `;
  pool.query(query)
    .then(res => callback(null, res))
    .catch(e => callback(e, null))
}

pool.getSelfBio = (callback) => {
  const bio = {};
  pool.query(`SELECT * FROM self_experience`)
    .then(res => {
      bio.experiences = res.rows;
      pool.query(`SELECT * FROM self_education`)
        .then(res => {
          bio.educations = res.rows;
          pool.query(`SELECT * FROM self_skill`)
            .then(res => {
              bio.skills = res.rows;
              pool.query(`SELECT * FROM self_portfolio`)
                .then(res => {
                  bio.portfolios = res.rows;
                  callback(null, bio);
                })
            })
        })
    })
    .catch(err => callback(err, null))
}

module.exports = pool;
