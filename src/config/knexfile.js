import config from "./config.js";
const debug = config.NODE_ENV == "development";

const ormconfig = {
	client: config.DB_CLIENT,
	port: 1433,
	stream: false,
	connection: {
		server: config.DB_HOST,
		database: config.DB_NAME,
		user: config.DB_USER,
		password: config.DB_PASSWORD,
		sendStringParametersAsUnicode: false,
		requestTimeout: 6000000,
		options: {
			enableArithAbort: true,
			sendStringParametersAsUnicode: false,
			trustServerCertificate: true,

		}
	},
	pool: {
		min: 0,
		max: 10,
	}
};

export default ormconfig;
