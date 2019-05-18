import { Pool } from "pg";
import "babel-polyfill";
import Config from '../constants/config';
import dbConstants from '../constants/dbConstants';

const pool = new Pool({
    host: Config.PG_DB_URL,
    port: Config.DB_PORT,
    database: Config.DB_DEFAULT_DATABASE,
    user: Config.DB_USER,
    password: Config.DB_PASS
})

pool.on('connect', () => {
    console.log(`Successfully connected to ${Config.PG_DB_URL}`);
});

const createHistoryTable = async() => {
    const queryText =
        `CREATE TABLE IF NOT EXISTS 
            ${dbConstants.HISTORY_TABLE}(
                id SERIAL PRIMARY KEY,
                sprint_no INT NOT NULL,
                project_id INT NOT NULL,
                sprint_start_date TIMESTAMP,
                release_date TIMESTAMP,
                review_date TIMESTAMP
            );`
    await pool.query(queryText);
}

const createConfigurationTables = async() => {
    const queryText =
        `CREATE TABLE IF NOT EXISTS
            ${dbConstants.CONFIGURATION_TABLE}(
                project_id INT PRIMARY KEY,
                release_tagging BOOLEAN,
                review_tagging BOOLEAN,
                feature_tagging BOOLEAN,
                chore_tagging BOOLEAN,
                bugfix_tagging BOOLEAN
            );
        `;
    await pool.query(queryText);
}

const createPTView = async() => {
    const queryText = 
        `CREATE OR REPLACE VIEW ${dbConstants.PT_VIEW} AS
            SELECT ht.sprint_no as sprint_no,
                   ht.project_id as project_id,
                   ht.sprint_start_date as sprint_start_date,
                   ht.release_date as release_date, 
                   ht.review_date as review_date,
                   ct.release_tagging as release_tagging,
                   ct.review_tagging as review_tagging,
                   ct.feature_tagging as feature_tagging,
                   ct.chore_tagging as chore_tagging,
                   ct.bugfix_tagging as bugfix_tagging
            FROM ${dbConstants.CONFIGURATION_TABLE} AS ct
            INNER JOIN ${dbConstants.HISTORY_TABLE} AS ht
            ON ct.project_id = ht.project_id
        ;`
    await pool.query(queryText);
}

const seedHistoryTable = async() => {
    const queryText = 
        `INSERT INTO ${dbConstants.HISTORY_TABLE}(sprint_no, project_id, sprint_start_date, release_date, review_date)
            VALUES(27, 2345186, TIMESTAMP '2019-05-21 00:00:00', TIMESTAMP '2019-05-30 00:00:00', TIMESTAMP '2019-06-04 00:00:00')`;
    await pool.query(queryText);
}

export const createAllTables = async() => {
    await createHistoryTable();
    await createConfigurationTables();
    await seedHistoryTable();
    await createPTView();
}