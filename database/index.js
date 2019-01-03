const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zzandland_website',
  password: 'ye',
});

pool.connect(() => console.log('postgres connected'));

pool.getPosts = callback => {
  const query = `
    SELECT
      blog_post.*,
      blog_user.id AS user_id,
      blog_user.first_name,
      blog_user.last_name,
      (SELECT COUNT(*) FROM blog_comment WHERE blog_post.id = blog_comment.post) AS comments
    FROM
      blog_post
    INNER JOIN blog_user ON blog_post.author = blog_user.id;
  `;
  pool.query(query)
    .then(res => callback(null, res.rows))
    .catch(err => callback(err, null))
}

pool.getComments = (postId, callback) => {
  const query = `
    SELECT 
      *,
      (SELECT first_name FROM blog_user WHERE blog_comment.author = blog_user.id),
      (SELECT last_name FROM blog_user WHERE blog_comment.author = blog_user.id)
    FROM blog_comment WHERE blog_comment.post = ${postId}
  `;
  pool.query(query)
    .then(res => callback(res.rows))
    .catch(err => callback(err))
}

pool.getSelfBio = callback => {
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
