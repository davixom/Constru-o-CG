const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Solicitacao extends Model {}

Solicitacao.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  materialId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pendente', 'aprovado', 'rejeitado'),
    defaultValue: 'pendente'
  },
  motivo_rejeicao: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Solicitacao',
  timestamps: true
});

module.exports = Solicitacao;