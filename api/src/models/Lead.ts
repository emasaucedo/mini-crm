import { DataTypes, Model, Sequelize } from 'sequelize';

export class Lead extends Model {
  public id!: number;
  public userId!: number;
  public name!: string;
  public email!: string;
  public phone!: string | null;
  public company_name!: string | null;
  public source!: 'referral' | 'website' | 'social' | 'cold-outreach' | 'other';
  public status!: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  public created_at!: Date;
}

export function initLead(sequelize: Sequelize) {
  Lead.init(
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
      company_name: { type: DataTypes.STRING, allowNull: true },
      source: {
        type: DataTypes.ENUM('referral', 'website', 'social', 'cold-outreach', 'other'),
        allowNull: false,
        defaultValue: 'other',
      },
      status: {
        type: DataTypes.ENUM('new', 'contacted', 'qualified', 'converted', 'lost'),
        allowNull: false,
        defaultValue: 'new',
      },
    },
    {
      sequelize,
      tableName: 'leads',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      underscored: true,
    },
  );

  return Lead;
}
