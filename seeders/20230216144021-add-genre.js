'use strict';

/** @type {import('sequelize-cli').Migration} */
const genreData = [
  {
    title: "Action"
  },
  {
    title: "Adventure"
  },
  {
    title: "Horror"
  },
  {
    title: "Sci-fi"
  },
  {
    title: "Comedy"
  }
]

genreData.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
})
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', genreData, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genres", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
