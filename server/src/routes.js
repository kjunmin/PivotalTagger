import ConfigController from "./controllers/ConfigController";
import TrackerController from "./controllers/TrackerController";
import { createAllTables, dropAllTables } from './db/dbCreateScripts';

const Routes = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/test', (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Invalid Endpoint\n');
    })

    app.get('/api/droptables', (req, res) => {dropAllTables; res.send("Tables dropped")});
    app.get('/api/createtables', (req, res) => {createAllTables; res.send("Tables created")});
    app.get('/api/getsprint/project/:projectId/', new TrackerController().getLatestSprint);

    app.get('/api/project/:projectId/getconfig', new TrackerController().getConfigurations);
    app.get('/api/getlabels/:projectId', new TrackerController().getLabelsInProject);
    app.get('/api/project/:projectId/label/:queryName', new TrackerController().getLabelByName);
    app.get('/api/config/project/:projectId', ConfigController.getConfiguration);
    app.post('/api/updateconfig', ConfigController.saveConfiguration);
    app.post('/api/pt/hook', new TrackerController().onTrackerEvent);
}

export default Routes;