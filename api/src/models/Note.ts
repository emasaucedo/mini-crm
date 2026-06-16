import { DataTypes, Model, Sequelize } from 'sequelize';

export class Note extends Model {
  public id!: number;
  public userId!: number;
  public contactId!: number;
  public dealId!: number;
  public content!: string;
  public created_at!: Date;
}

export function initNote(sequelize: Sequelize) {
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'user_id' },
      contactId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'contact_id' },
      dealId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'deal_id' },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      tableName: 'notes',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      underscored: true,
    },
  );

  return Note;
}
