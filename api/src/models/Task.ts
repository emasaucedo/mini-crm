import { DataTypes, Model, Sequelize } from 'sequelize';

export class Task extends Model {
  public id!: number;
  public title!: string;
  public completed!: boolean;
}

export function initTask(sequelize: Sequelize) {
  Task.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { sequelize, tableName: 'tasks' },
  );

  return Task;
}
