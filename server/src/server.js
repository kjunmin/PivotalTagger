import express from 'express';
import bodyParser from 'body-parser';
import 'babel-polyfill';
import Routes from "./routes";
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;
const staticPath = path.join(__dirname, 'build');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(staticPath));

Routes(app);

app.listen(port, () => {
    console.log(`Serving static files from ${staticPath}`);
    console.log(`Listening on port ${port}`);
})