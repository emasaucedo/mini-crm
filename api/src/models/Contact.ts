import { DataTypes, Model, Sequelize } from "sequelize";

export class Contact extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public companyId!: number | null;
}

export function initContact(sequelize: Sequelize) {
  Contact.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: true },
      companyId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
    },
    { sequelize, tableName: "contacts" },
  );

  return Contact;
}
