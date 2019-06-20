import Config from "../constants/config";
import LabelUtil from "../utils/LabelUtil";
import db from "../db/databaseHandler";
import PTConstants from "../constants/PTConstants";
import PtUtil from "../utils/PtUtil";
import RequestUtil from "../utils/RequestUtil";

class ApiController {
    constructor() {
        this.requestUtil = new RequestUtil();
    }

    async getProjectInfo(req, res) {
        let url = Config.PT_BASE_URL;
        url += `/projects/${Config.PROJECT_ID}`;
        const projectInfo = this.requestUtil.getResponseData(url, this.requestUtil.REQUEST_METHOD.GET);

    }

    async getStoriesBySprint(req, res) {
        let url = Config.PT_BASE_URL;
        url += `/projects/${projectId}/search?query=label:sprint${sprintNo}
                +AND+owner:${username}`;
    }
    
}