'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    static associate({ OrderItem }) {
      this.hasMany(OrderItem, { foreignKey: 'drug_id' });
    }
  }
  Drug.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      salePrice: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Drug',
    }
  );
  return Drug;
};
