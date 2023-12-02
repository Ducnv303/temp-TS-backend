import  Queue from 'bull';
import { QueueOptions } from 'bull';
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_PREFIX } from '@app-configs';

const jobOptionsLongtime: QueueOptions = {
	redis: {
		host: REDIS_HOST,
		port: REDIS_PORT,
		password: REDIS_PASSWORD,
		enableReadyCheck: false,
		maxRetriesPerRequest: null,
	},
	prefix: REDIS_PREFIX,
	defaultJobOptions: {
		removeOnComplete: 1000,
		removeOnFail: 1000,
	},
};

export const bull_job = new Queue('bull-job', jobOptionsLongtime);