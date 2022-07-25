var DataTypes = require("sequelize").DataTypes;
var _games = require("./games");

function initModels(sequelize) {
  var games = _games(sequelize, DataTypes);


  return {
    games,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
