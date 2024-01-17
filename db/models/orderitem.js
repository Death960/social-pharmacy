'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, Drug }) {
      this.belongsTo(Order, { foreignKey: 'order_id' }),
        this.belongsTo(Drug, { foreignKey: 'drug_id' });
    }
  }
  OrderItem.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      drug_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Drugs',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      count: {
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
      modelName: 'OrderItem',
    }
  );
  return OrderItem;
};
