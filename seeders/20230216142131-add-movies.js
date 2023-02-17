'use strict';

/** @type {import('sequelize-cli').Migration} */

const movieData = [
  {
    title: "Pengabdi Wakanda",
    year: 2020
  },
  {
    title: "Avatar",
    year: 2022
  },
  {
    title: "Last of us",
    year: 2023
  },
  {
    title: "Red Notice",
    year: 2021
  }
]

movieData.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
})



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', movieData, {})
    
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
   
  }
};
