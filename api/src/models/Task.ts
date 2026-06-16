import { DataTypes, Model, Sequelize } from 'sequelize';

export class Task extends Model {
  public id!: number;
  public userId!: number;
  public dealId!: number;
  public contactId!: number;
  public title!: string;
  public due_date!: Date | null;
  public completed!: boolean;
  public created_at!: Date;
}

export function initTask(sequelize: Sequelize) {
  Task.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'user_id' },
      dealId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'deal_id' },
      contactId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'contact_id' },
      title: { type: DataTypes.STRING, allowNull: false },
      due_date: { type: DataTypes.DATE, allowNull: true },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'tasks',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      underscored: true,
    },
  );

  return Task;
}
