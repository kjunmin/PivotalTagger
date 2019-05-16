import { Pool } from "pg";
import "babel-polyfill";
import Config from './constants/config';
import dbConstants from './constants/dbConstants';

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
    async updateConfiguration(configJson) {
        const queryText = `INSERT INTO public."${dbConstants.CONFIGURATION_TABLE}"(project_id, release_tagging, feature_tagging, chore_tagging, bugfix_tagging)
                            VALUES('${configJson.projectId}', '${configJson.isReleaseTaggingEnabled}', 
                                    '${configJson.isFeatureTaggingEnabled}', '${configJson.isChoreTaggingEnabled}', '${configJson.isBugfixTaggingEnabled}')
                            ON CONFLICT (project_id) DO UPDATE
                            SET (release_tagging, feature_tagging, chore_tagging, bugfix_tagging) = ('${configJson.isReleaseTaggingEnabled}', 
                            '${configJson.isFeatureTaggingEnabled}', '${configJson.isChoreTaggingEnabled}', '${configJson.isBugfixTaggingEnabled}');`;
        console.log(queryText);
        const res = await pool.query(queryText);
        return { status: 1, text: "Configuration Saved!", data: null };
    },

    async getConfiguration(projectId) {
        const queryText = `SELECT project_id, release_tagging, feature_tagging, chore_tagging, bugfix_tagging, next_release_date, next_review_date FROM
                        public."${dbConstants.CONFIGURATION_TABLE}" WHERE project_id = '${projectId}'`;
        console.log(queryText);
        const res = await pool.query(queryText);
        return { status: 1, text: null, data: res.rows };
    }
}

export default db;