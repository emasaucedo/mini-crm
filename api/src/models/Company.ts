import { DataTypes, Model, Sequelize } from "sequelize";

export class Company extends Model {
  public id!: number;
  public name!: string;
  public website!: string | null;
}

export function initCompany(sequelize: Sequelize) {
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      website: { type: DataTypes.STRING, allowNull: true },
    },
    { sequelize, tableName: "companies" },
  );

  return Company;
}
