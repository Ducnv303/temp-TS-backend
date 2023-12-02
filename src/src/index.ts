import { PORT } from '@app-configs';
import { appLogger } from '@app-helpers';
import sequelize from '@app-configs/postgres';
import app from './app'
import * as http from 'http'

sequelize
	.authenticate()
	.then(async () => {
		appLogger.info("Connection db has been established successfully!");
		const server = http.createServer(app);
		server.listen(PORT, async () => {
			appLogger.info(`Service start port ${PORT}`);
			// await sequelize.sync({});			
		});
	})
	.catch(e => {
		appLogger.error(e);
		process.exit(1);
	});
