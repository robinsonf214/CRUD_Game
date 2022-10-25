var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */


/* GET games. */
router.get('/', function(req, res, next){
  //var datos 
  models.games.findAll({ 
    attributes: { exclude: ["updatedAt", "createdAt"] }
  }) 
  .then(games => {
    res.send(games)
  })
  .catch(error => res.status(400).send(error))
});




/* GET games by ID. */
router.get('/:idgame', (req, res, next) => {
 models.games.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
    where: {
      id: req.params.idgame
    }
  })
  .then(games => {
      res.send(games[0])
  })
  .catch(error => res.status(400).send(error))
});



/* POST games */
router.post('/', function(req, res, next){
  const game ={
    id: req.body.id,
    title: req.body.title,
    description:req.body.description,
    image: req.body.image,
    created_at: new Date()
  };
  models.games.create(game)
  .then (data => {
    res.send(data);
  })
  .catch(error => res.status(400).send(error))
});

/* PUT games */
router.put('/:id', function(req, res, next){
  const game ={
    id: req.body.id,
    title: req.body.title,
    image: req.body.image,
    description:req.body.description,
    created_at: new Date()
  };
  models.games.update(game, {
    where: {
      id: req.params.id  
    }
  })
  .then(game => {
    res.send(game)
})
  .catch(error => res.status(4e0).send(error))
});



/* DELETE games */
router.delete('/:idgame', function(req, res, next){
  models.games.destroy({
    where: {
      id: req.params.idgame
    }
    })
 .then(game => {
     res.json
     (`juego ${req.params.idgame} eliminado`)
  })
  .catch(error => res.status(480).send(error))

});




module.exports = router;
