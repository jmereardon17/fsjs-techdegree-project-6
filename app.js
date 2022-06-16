const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'pug');
app.use(routes);

app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = 'Page Not Found';
  console.error(`(${err.status}) ${err.message}`);
  next(err);
});

app.use((err, req, res, next) => {
  console.log('Global error handler was called -', err);
  res.status(err.status);
  if (err.status === 404) {
    res.render('page-not-found', { err })
  } else {
    err.message = 'Oh no! Looks like something went wrong on the server.'
    res.status(err.status || 500).render('error', { err })
  }
});

app.listen(3000, () => console.log('The application is running on localhost:3000!'));