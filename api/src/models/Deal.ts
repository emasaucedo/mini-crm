import { DataTypes, Model, Sequelize } from 'sequelize';

export class Deal extends Model {
  public id!: number;
  public userId!: number;
  public contactId!: number;
  public title!: string;
  public value!: number;
  public stage!: 'lead' | 'proposal' | 'negotiation' | 'won' | 'lost';
  public closed_at!: Date | null;
  public created_at!: Date;
}

export function initDeal(sequelize: Sequelize) {
  Deal.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'user_id' },
      contactId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'contact_id' },
      title: { type: DataTypes.STRING, allowNull: false },
      value: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
      stage: {
        type: DataTypes.ENUM('lead', 'proposal', 'negotiation', 'won', 'lost'),
        allowNull: false,
        defaultValue: 'lead',
      },
      closed_at: { type: DataTypes.DATE, allowNull: true },
    },
    {
      sequelize,
      tableName: 'deals',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      underscored: true,
    },
  );

  return Deal;
}
