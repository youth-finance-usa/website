import { custom_sqlite } from './sqlite3_';
import {fucked_param_gen, insert_param} from "./utils/sql_params.ts";
import { rng } from "./utils/rng.ts";
const start_databases = async (filename: string) => {
    const user_table_config = [
        "UID", "CHAR(16)",
        "Email", "VARCHAR(255)",
        "Name", "VARCHAR(255)",
        "Avatar", "TEXT",
        "Password", "TEXT",
        "Recovery", "VARCHAR(255)",
        "Email_verified_at", "TIMESTAMP"
    ];

    const logging_table_config = [
        "UID", "CHAR(16)",
        "Category", "TEXT",
        "Event", "TEXT",
        "Time", "TIMESTAMP"
    ];

    const perms_table_config = [
        "UID", "CHAR(16)",
        "Owner", "BOOLEAN",
        "Deletion", "BOOLEAN",
        "Creation", "BOOLEAN",
        "Manipulation", "BOOLEAN"
    ];

    const rng_ = new rng();
    const z_user = [
        rng_.generateRandomValue(16, rng_.numberCharSet).toString(),
        "zjrichman@outlook.com",
        "Zachary Richman",
        "/images/avatars/zjr.png",
        "temp",
        "na",
        new Date().toISOString()
    ];

    const sql = new custom_sqlite();

    await sql.create_table(filename, "Users", fucked_param_gen(user_table_config));
    await sql.create_table(filename, "Logging", fucked_param_gen(logging_table_config));
    await sql.create_table(filename, "Permission", fucked_param_gen(perms_table_config));

    await sql.insert_into(filename, "Users", insert_param(z_user));
}

start_databases('./database.db');