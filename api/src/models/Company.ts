import { DataTypes, Model, Sequelize } from 'sequelize';

export class Company extends Model {
  public id!: number;
  public userId!: number;
  public name!: string;
  public industry!: string | null;
  public website!: string | null;
  public created_at!: Date;
}

export function initCompany(sequelize: Sequelize) {
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'user_id' },
      name: { type: DataTypes.STRING, allowNull: false },
      industry: { type: DataTypes.STRING, allowNull: true },
      website: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      tableName: 'companies',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      underscored: true,
    },
  );

  return Company;
}
