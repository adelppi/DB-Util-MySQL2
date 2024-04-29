import mysql, { ResultSetHeader } from "mysql2/promise";
import "dotenv/config";

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    namedPlaceholders: true,
});

export const select = async <T>(
    query: string,
    params?: Record<string, any>
): Promise<Partial<T>[]> => {
    const [results] = await pool.execute(query, params);
    return results as T[];
};

export const modify = async (
    query: string,
    params?: Record<string, any>
): Promise<ResultSetHeader> => {
    const [results] = await pool.execute(query, params);
    return results as ResultSetHeader;
};
