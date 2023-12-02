import { Sequelize } from "sequelize-typescript";
import { DB_TIMEZONE, DB_TYPE, POSTGRES_URI, POSTGRES_SLAVE_URI } from "@app-configs";
import { models } from "@app-repositories/models";
import { Dialect } from 'sequelize/types/sequelize'
import * as pgParse from "pg-connection-string";
import { ConnectionOptions } from "pg-connection-string";

const DB: ConnectionOptions = pgParse.parse(POSTGRES_URI);
const SLAVE: ConnectionOptions = pgParse.parse(POSTGRES_SLAVE_URI);

const sequelize = new Sequelize(DB.database, DB.user, DB.password, {
	define: {
		freezeTableName: true,
	},
	dialect: DB_TYPE as Dialect,
	dialectOptions: {
		useUTC: false,
		dateStrings: true,
		charset: "utf8",
		multipleStatements: true,
	},
	port: Number(DB.port || 5432),
	replication: {
		read: [
			{
				...SLAVE,
			},
			{
				...DB,
			},
		],
		write: {
			...DB,
		},
	},
	pool: {
		max: 10,
		min: 1,
		idle: 20000,
		acquire: 50000,
		evict: 1000,
	},
	timezone: DB_TIMEZONE,
	logging: false,
	models,
});

export default sequelize;
