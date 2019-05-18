import db from '../db/databaseHandler';

const ConfigController = {
    async getConfiguration(req, res) {
        const projectId = req.params.projectId;
        const output = await db.getConfiguration(projectId);
        res.send(output);
    },

    async saveConfiguration(req, res) {
        const configJson = req.body;
        console.log(configJson);
        const output = await db.updateConfiguration(configJson);
        res.send(output);
    },

    // writeToConfig(object) {
    //     const configPath = path.resolve(__dirname, './configuration.json');
    //     console.log(configPath);
    //     const configJson = JSON.stringify(object);
    //     console.log()
    // }
}

export default ConfigController;