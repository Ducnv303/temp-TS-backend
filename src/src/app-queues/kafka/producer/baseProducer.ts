import * as kafka from 'kafka-node';
import { Producer, ProduceRequest } from 'kafka-node';
import { appLogger } from '@app-helpers';
import { Kafka } from '.';

export const TOPIC = {
	TEMP: 'TEMP',
}

export class BaseProducer {
	protected producer: Producer;
	protected topic: string = undefined;

	constructor() {
		if (!this.producer) {
			const kafkaClient = new Kafka();
			this.producer = new kafka.Producer(kafkaClient.client, {
				partitionerType: 2,
			});

			this.producer.on('ready', function () {
				appLogger.info(`Kafka Producer ready..`);
			});
			this.producer.on('error', e => {
				appLogger.error(e.message);
			});
		}
	}

	private async sendMessage(message: any, topic?: string): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				if (!topic && !this.topic) {
					appLogger.error('Kafka topic empty!');
					reject();
				}
				const payloads: ProduceRequest[] = [
					{
						topic: topic || this.topic,
						messages: JSON.stringify(message),
					},
				];

				this.producer.send(payloads, (err, data) => {
					if (err) {
						appLogger.error(err.message);
						reject(err);
					}
					resolve(data);
				});
			} catch (e) {
				appLogger.error(`[${topic || this.topic}] Send message kafka error ` + e.message);
				reject(e)
			}
		})
	}

	async temp(message: any): Promise<void> {
		return this.sendMessage(message, TOPIC.TEMP)
	}
}
