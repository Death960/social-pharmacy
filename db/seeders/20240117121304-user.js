'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'a@a',
        password: await bcrypt.hash('123', 10),
        img: '123',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sultan',
        email: 'samedov-sultan@mail.ru',
        password: await bcrypt.hash('sultan', 10),
        img: 'https://media.licdn.com/dms/image/C5603AQGVQYSUnr85KQ/profile-displayphoto-shrink_200_200/0/1647431000439?e=2147483647&v=beta&t=eZVGJdG-UiAURzEOegPpmJ-DBQ8vrVgH-bfhDPekZGo',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null);
  },
};
