'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      name: 'Buku',
      description: 'Berisi tentang kategori seputar Buku'
     },{
      name: 'Majalah',
      description: 'Berisi tentang Majalah di Meja'
     },{
      name: 'Pensil',
      description: 'Berisi tentang Merk seputar Pensil'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
