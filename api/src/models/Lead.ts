import { DataTypes, Model, Sequelize } from 'sequelize';

export class Lead extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public status!: string;
}

export function initLead(sequelize: Sequelize) {
  Lead.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true },
      status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'new' },
    },
    { sequelize, tableName: 'leads' },
  );

  return Lead;
}
