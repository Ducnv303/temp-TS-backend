import * as Queue from 'bull';
import { appLogger } from '@app-helpers';

module.exports = async (
	job: Queue.Job<{}>,
	done,
) => {
	try {
		
		done();
	} catch (e) {
		appLogger.info(e);
		done(e);
	} finally {
		// await queue_statistical_tx.add(
		// 	{},
		// 	{
		// 		repeat: {
		// 			cron: '*/2 * * * *'
		// 		},
		// 	},
		// );
	}
};
