import { DataTypes, Model, Sequelize } from 'sequelize';

export class Deal extends Model {
  public id!: number;
  public title!: string;
  public value!: number;
  public status!: string;
}

export function initDeal(sequelize: Sequelize) {
  Deal.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      value: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'open',
      },
    },
    { sequelize, tableName: 'deals' },
  );

  return Deal;
}
