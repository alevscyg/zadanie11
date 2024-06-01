import * as path from 'path';
import { User } from "./User.model"
import { DataSource } from 'typeorm';
// @ts-expect-error
const db = path.join(__dirname, "..", process.env.SQLITE3_DATABASE);

export const myDataSource = new DataSource({
    type: "sqlite",
    database: db,
    synchronize: true,
    entities: [User],
});

export const initDataSoure = async() => {
    await myDataSource.initialize();
    console.log("Database connected and initialized");
};

initDataSoure().catch((err) => {
    console.log("Database connection error", err);
});