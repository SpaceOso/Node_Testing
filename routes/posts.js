const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
