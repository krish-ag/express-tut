
import path from 'path';
import blogs from '../database/blogs.js';
import express from 'express';

export const router = express.Router();

const options = {root: "."}

router.get('/', (req, res) => {
  console.log(req)
  // res.sendFile("templates/index.html", options);
  res.render('home', {blogs: blogs});

})

router.get('/blog/:slug', (req, res) => {
  let blog = blogs.filter((blog) => (blog.slug === req.params.slug));
  if (blog.length === 0) {
    res.status(404).sendFile("templates/404.html", options);
    return;
  }
  blog = blog[0];
  console.log(blog);
  res.sendFile("templates/blog.html", options);
})

export default router;
