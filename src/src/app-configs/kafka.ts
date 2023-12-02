import { KafkaClient, KafkaClientOptions } from "kafka-node";
import { appLogger } from "@app-helpers";
import { KAFKA_HOST } from "@app-configs";

export class Kafka {
    client: KafkaClient;

    constructor() {
        const opts: KafkaClientOptions = {
            kafkaHost: `${KAFKA_HOST}`,
            autoConnect: true,
        };
        this.client = new KafkaClient(opts);
    }

    init() {
        this.client.on("ready", async () => {
            appLogger.info("Kafka ready...!");
        });
        this.client.on("error", e => {
            appLogger.error("Kafka error " + e.message);
        });
    }
}
