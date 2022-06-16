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
  let project;

  if (id) {
    project = data.projects.find(project => project.id.toString() === id)
  } else {
    project = data.projects[Math.floor(Math.random() * data.projects.length)];
  }

  res.render('project', { project });
});

module.exports = router;