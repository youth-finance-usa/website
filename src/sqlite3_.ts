import {open} from "sqlite";
const sqlite3 = require('sqlite3').verbose();


import { fucked_param_gen, insert_param } from './utils/sql_params.ts';

export class custom_sqlite {
    async create_table(filename: string, table_name: string, params: string) {
        const db = await open({
            filename,
            driver: sqlite3.Database
        });

        const stmt = `CREATE TABLE IF NOT EXISTS ${table_name} ${params}`;
        await db.exec(stmt);
        await db.close();
    }

    async insert_into(filename: string, table_name: string, params: string) {
        const db = await open({
            filename,
            driver: sqlite3.Database
        });

        const stmt = `INSERT INTO ${table_name} VALUES ${params}`;
        await db.exec(stmt);
        await db.close();
    }
}