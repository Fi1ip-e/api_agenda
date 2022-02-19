const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('bdcontato', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'});

const Contato = sequelize.define('tbcontatos', {
  
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  telephone_1: { type: Sequelize.INTEGER },
  telephone_2: { type: Sequelize.INTEGER },
},
{
  timestamps: false
});

module.exports = Contato;