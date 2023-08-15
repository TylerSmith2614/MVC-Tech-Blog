const router = require("express").Router();

const { User } = require("../models");

// Get all posts by users ('/)
router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const dishData = await Dish.findAll().catch((err) => { 
    res.json(err);
  });
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('all', { dishes });
  });


module.exports = router;