import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const SEQUELIZE = new Sequelize({
  dialect: process.env.DB_DRIVER as any,  // Cast as `any` because Sequelize dialect expects 'mysql', 'postgres', etc.
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default SEQUELIZE;