'use strict';

const bodyParser = require('body-parser');
const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = function({ router, app }) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  router.get('/api/about', (req, res) =>
    res.end(
      JSON.stringify({
        text: `This about text was generated async from the server`
      })
    )
  );

  router.get('/api/home', (req, res) =>
    res.end(
      JSON.stringify({
        text: `This Home text was generated async from the server`
      })
    )
  );

  return router;
};
