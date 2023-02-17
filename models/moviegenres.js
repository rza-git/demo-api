'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieGenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // MovieGenres.belongsTo(models.Movies, {foreignKey: "movie_id"})
      // MovieGenres.belongsTo(models.Genres, {foreignKey: "genre_id"})
    }
  }
  MovieGenres.init({
    movie_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieGenres',
  });
  return MovieGenres;
};