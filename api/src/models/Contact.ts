import { DataTypes, Model, Sequelize } from 'sequelize';

export class Contact extends Model {
  public id!: number;
  public userId!: number;
  public name!: string;
  public email!: string;
  public phone!: string | null;
  public companyId!: number | null;
  public notes!: string | null;
  public created_at!: Date;
}

export function initContact(sequelize: Sequelize) {
  Contact.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'user_id' },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: true },
      companyId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true, field: 'company_id' },
      notes: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      tableName: 'contacts',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      underscored: true,
    },
  );

  return Contact;
}
