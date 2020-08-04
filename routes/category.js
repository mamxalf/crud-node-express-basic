const express = require('express');
const router = express.Router();

const models = require('../models');

/* GET home page. */
router.get('/', async (req, res) => {
  const data = await models.Category.findAll({
    attributes:['name'],
    include:{
        model: models.Post,
        attributes:['title', 'description']
      }
  });

  return res.json(data);
});

module.exports = router;
