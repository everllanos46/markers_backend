/*import dotenv from 'dotenv';*/
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	PORT: process.env.PORT || 8882,
	APPLICATION_NAME: process.env.APPLICATION_NAME || 'Markers-Backend',
	NODE_ENV: process.env.NODE_ENV || 'production',

	DB_CLIENT: process.env.DB_CLIENT || 'mssql',
	DB_HOST: process.env.SERVER_NAME,
	DB_NAME: process.env.DB_NAME,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD
}