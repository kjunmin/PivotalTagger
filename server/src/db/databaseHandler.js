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
    console.log(`Successfully connected to ${Config.PG_DB_URL}, databse: ${Config.DB_DEFAULT_DATABASE}`);
})

const db = {
    async getLatestSprintInfo(projectId) {
        const queryText = `SELECT * FROM ${dbConstants.HISTORY_TABLE} WHERE project_id = '${projectId}' ORDER BY sprint_no DESC;`;
        const res = await pool.query(queryText);
        return { status: 1, text: "Data retrieved!", data: res.rows[0] };
    },

    async getHistory(projectId, sprintNo) {
        const queryText = `SELECT * FROM ${dbConstants.HISTORY_TABLE} WHERE sprint_no = '${sprintNo}' AND project_id = '${projectId}';`;
        const res = await pool.query(queryText);
        return { status: 1, text: "Data retrieved!", data: res.rows[0] };
    },

    async updateHistory(historyJson) {
        const queryText = `INSERT INTO public."${dbConstants.HISTORY_TABLE}"(sprint_no, project_id, sprint_start_date, release_date, review_date)
                            VALUES('${historyJson.sprintNo}', '${historyJson.projectId}', '${historyJson.sprintStartDate}', '${historyJson.releaseDate}', '${historyJson.reviewDate}')`
        const res = await pool.query(queryText);
        return { status: 1, text: "History Updated!", data: null };
    },

    async saveHistory(historyJson) {
        const queryText = `UPDATE ${dbConstants.HISTORY_TABLE} SET release_date = '${historyJson.releaseDate}', review_date = '${historyJson.reviewDate}' 
                            WHERE sprint_no = '${historyJson.sprintNo}' AND project_id = '${historyJson.projectId}'; `;
        console.log(queryText);
        const res = await pool.query(queryText);
        return { status: 1, text: "Dates updated!", data: null };
    },

    async updateConfiguration(configJson) {
        const queryText = `INSERT INTO ${dbConstants.CONFIGURATION_TABLE}(project_id, release_tagging, review_tagging, feature_tagging, chore_tagging, bugfix_tagging)
                            VALUES('${configJson.projectId}', '${configJson.isReleaseTaggingEnabled}', '${configJson.isReviewTaggingEnabled}',
                                                                '${configJson.isFeatureTaggingEnabled}', '${configJson.isChoreTaggingEnabled}', '${configJson.isBugfixTaggingEnabled}')
                            ON CONFLICT (project_id) DO UPDATE
                            SET (release_tagging, review_tagging, feature_tagging, chore_tagging, bugfix_tagging) = ('${configJson.isReleaseTaggingEnabled}', '${configJson.isReviewTaggingEnabled}',
                            '${configJson.isFeatureTaggingEnabled}', '${configJson.isChoreTaggingEnabled}', '${configJson.isBugfixTaggingEnabled}');`;
        const res = await pool.query(queryText);
        return { status: 1, text: "Configuration Saved!", data: null };
    },

    async getConfiguration(projectId) {
        const queryText = `SELECT project_id, release_tagging, review_tagging, feature_tagging, chore_tagging, bugfix_tagging FROM
                        ${dbConstants.CONFIGURATION_TABLE} WHERE project_id = '${projectId}'`;
        const res = await pool.query(queryText);
        return { status: 1, text: null, data: res.rows[0] };
    },

    async getConfigurations(projectId) {
        const queryText = `SELECT * FROM ${dbConstants.PT_VIEW} WHERE project_id = '${projectId}' ORDER BY sprint_no DESC;`;
        const res = await pool.query(queryText);
        return { status: 1, text: null, data: res.rows[0] };
    }
}

export default db;