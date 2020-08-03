const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();

/* load model */
const models = require('../models');

/* GET users listing. */
router.get('/',  async function(req, res) {
  const data = await models.Post.findAll({
    attributes:['title', 'description'],
    include:{
        attributes:['name'],
        model: models.Category
      }
  });

  return res.json(data);
});

router.post('/create', async function(req, res) {
    const schema = {
        title: 'string|empty:false|min:5',
        description: 'string|empty:false',
        id_category: 'number'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error bro!',
            message: validate
        });
    }

    const newPost = {
        title: req.body.title,
        description: req.body.description,
        id_category: req.body.id_category
    };

    const createPost = await models.Post.create(newPost);

    return res.json({
       status: 'success',
       data: createPost
    });
});

router.put('/update/:id', async function (req, res) {
    const schema = {
        title: 'string|empty:false|min:5',
        description: 'string|empty:false',
        id_category: 'number'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error bro!',
            message: validate
        });
    }

    const id = req.params.id;
    const post = await models.Post.findByPk(id);

     if(!post) {
        return res.status(404).json({
            status: 'error',
            message: 'Post not found'
        });
    }

    const updatePost = {
        title: req.body.title,
        description: req.body.description,
        id_category: req.body.id_category
    };

    const postUpdated = await post.update(updatePost);

    return res.json({
       status: 'success',
       data: postUpdated
    });

});

router.delete('/delete/:id', async function (req, res) {
    const id = req.params.id;
    const post = await models.Post.findByPk(id);

    if(!post) {
        return res.status(404).json({
            status: 'error',
            message: 'Post not found'
        });
    }

    await post.destroy();

    return res.json({
      status: 'success',
      message: 'Post Deleted!'
    });
});


module.exports = router;
