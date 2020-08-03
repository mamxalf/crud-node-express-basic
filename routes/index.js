const express = require('express');
const router = express.Router();

const models = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', async (req, res) => {
  const data = await models.Post.findAll({
    attributes:['title', 'description'],
    include:{
        attributes:['name', 'description'],
        model: models.Category
      }
  });

  return res.json(data);
});

// router.get('/test2', async (req, res) => {
//   const data = await models.Category.findAll({
//     attributes:['name'],
//     include:{
//         models.Post.findByPk(data.id{
//           attributes:['title']
//         });
//       }
//   });
//
//   return res.json(data);
// });

module.exports = router;
