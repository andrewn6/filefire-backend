import "reflect-metadata";
import { config } from "dotenv";
import { createConnection } from "typeorm";
require('express-async-errors');
config()

createConnection({
	type: "postgres",
	

}).then(() => {
	// parse port
})