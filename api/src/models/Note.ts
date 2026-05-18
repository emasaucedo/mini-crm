import { DataTypes, Model, Sequelize } from "sequelize";

export class Note extends Model {
  public id!: number;
  public content!: string;
}

export function initNote(sequelize: Sequelize) {
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    { sequelize, tableName: "notes" },
  );

  return Note;
}
