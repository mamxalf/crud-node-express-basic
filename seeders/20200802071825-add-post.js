'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: 'Buku Sidu',
      description: 'Buku halus murah',
      id_category: 1
     },{
      title: 'Majalah Bobo',
      description: 'Majalah Anak-anak',
      id_category: 2
     },{
      title: 'Pensil Stadler',
      description: 'Pensil 2B paling pandes',
      id_category: 3
     },{
      title: 'Majalah Trubus',
      description: 'Majalah tentang tani',
      id_category: 2
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
