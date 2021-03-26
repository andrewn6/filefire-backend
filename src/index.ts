import "reflect-metadata";
import { config } from "dotenv";
import { createConnection } from "typeorm";
require("express-async-errors");
config();

createConnection({
	type: "postgres",
	host: process.env.POSTGRES_HOST,
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	synchronize: true,
	logging: true,
	entities: [__dirname + "/database/entities/**/**.{ts,js}"],
	migrations: [__dirname + "/database/migrations/**/*.{ts,js}"],
	subscribers: [__dirname + "/database/subscribers/**/*.{ts,js}"]
}).then(() => {
	console.log("Connected to the database.");
});