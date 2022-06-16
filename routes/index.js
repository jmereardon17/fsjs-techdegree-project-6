const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/', (req, res) => res.render('index', { projects: data.projects }));
router.get('/about', (req, res) => res.render('about'));

router.get('/projects', (req, res) => {
  const project = data.projects[Math.floor(Math.random() * data.projects.length)];
  res.redirect(`/projects/${project.id}`);
});

router.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = data.projects.find(project => project.id.toString() === id);

  if (project) {
    res.render('project', { project });
  } else {
    const err = new Error();
    err.status = 404;
    err.message = 'Page Not Found';
    console.error(`(${err.status}) ${err.message}`);
  }
});

module.exports = router;