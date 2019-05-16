import ConfigController from "./controllers/ConfigController";
import TrackerController from "./controllers/TrackerController";

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

    app.get('/api/config/:projectId', ConfigController.getConfiguration);
    app.post('/api/updateconfig', ConfigController.saveConfiguration);
    app.post('/api/pt/hook', TrackerController.onTrackerEvent);
}

export default Routes;