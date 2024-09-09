import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { UserAttributes, UserCreationAttributes } from "../interface/userAttributes";

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public gender?: string;
  public status?: number;
  public created_on?: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
    created_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'tb_users',
    timestamps: false, // Adjust if you use automatic timestamps
  }
);

export default User;
