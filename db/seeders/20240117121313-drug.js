'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Drugs',
      [
        {
          name: 'Амбробене',
          img: 'https://imgproxy.sbermarket.ru/imgproxy/size-500-500/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMekUyTXpBek1ETXpMMjl5YVdkcGJtRnNMekV2TWpBeU1pMHdPQzB5TWxReE5pVXpRVFF5SlROQk5EWXVNVEExTURBd0pUSkNNREFsTTBFd01DOHhOak13TXpBek0xOHhMbXB3Wnc9PS5qcGc.jpg',
          price: 500,
          salePrice: 400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'ДжоДжосет',
          img: 'https://vn1.ru/upload/iblock/c10/dzhoset-sirop-ot-kashlya-200ml_detail_3485.jpg',
          price: 450,
          salePrice: 360,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Релиф',
          img: 'https://hb.bizmrg.com/media366_public/sys-master/product/h29/he2/11155027296286/hpm44305_515Wx515H.jpg',
          price: 600,
          salePrice: 480,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
