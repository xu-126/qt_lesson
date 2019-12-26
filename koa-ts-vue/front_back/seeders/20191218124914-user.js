'use strict';
const md5 = require('md5')
const moment = require('moment')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('user', [
    {
      id: 1,
      username: 'wn',
      password: md5('123456'),
      disabled: false,
      mobile: '18070415106',
      email: '1264930795@qq.com',
      created_ip_at: '127.0.0.1',
      updated_ip_at: '127.0.0.1',
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),   // 时间格式化
      updated_at:moment().format('YYYY-MM-DD HH:mm:ss')
    },
    {
      id: 2,
      username: 'wnn',
      password: md5('123456'),
      disabled: false,
      mobile: '18070415100',
      email: '1264930790@qq.com',
      created_ip_at: '127.0.0.2',
      updated_ip_at: '127.0.0.2',
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),   // 时间格式化
      updated_at:moment().format('YYYY-MM-DD HH:mm:ss')
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
