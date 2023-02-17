'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genres.belongsToMany(models.Movies, {through: models.MovieGenres, foreignKey: "genre_id"})
      // Genres.hasMany(models.MovieGenres, {foreignKey: "genre_id"})
    }
  }
  Genres.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genres',
  });
  return Genres;
};