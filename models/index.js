const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

Categoria.hasMany(Produto, {
  foreignKey: { name: 'categoriaId', allowNull: true },
  as: 'produtos',
  onDelete: 'SET NULL'
});
Produto.belongsTo(Categoria, {
  foreignKey: { name: 'categoriaId', allowNull: true },
  as: 'Categoria'
});

module.exports = {
  sequelize,
  Produto,
  Categoria
};
