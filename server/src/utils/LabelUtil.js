import RequestUtil from "./RequestUtil";
import Config from "../constants/config";

class LabelUtil {
    constructor() {
        this.requestUtil = new RequestUtil();
    }

    async getLabelsByProject(projectId) {
        let url = Config.PT_BASE_URL;
        url += `/projects/${projectId}`;
        url += `/labels`;

        return this.requestUtil.getResponseData(url, 'get');
    }

    async getLabelByName(queryName, labels) {
        return labels.filter(label => {
            return label.name == queryName;
        })
    }
}

export default LabelUtil;