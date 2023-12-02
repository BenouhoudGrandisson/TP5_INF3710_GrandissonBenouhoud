import * as pg from "pg";
require('dotenv').config({ path: '../.env' });

export class DatabaseConfig {
    public readonly connectionConfig: pg.ConnectionConfig = {
        user: process.env.DATABASE_USER ?? 'postgres',
        database: process.env.DATABASE_NAME ?? 'postgres',
        password: process.env.DATABASE_PASSWORD ?? 'postgres',
        host: process.env.DATABASE_HOST ?? 'localhost',
        port: Number(process.env.DATABASE_PORT) || 5432,
        keepAlive: true,
    };
}