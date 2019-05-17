import fetch from 'node-fetch';
import config from '../constants/config';

class RequestUtil {
    constructor() {
        this.apiKey = config.PT_DEV_API_TOKEN;
        // this.apiKey = config.PT_API_TOKEN;
    }

    async getResponseData(url, method)  {
        return fetch(url, {
            method: method,
            headers: { 'X-TrackerToken': this.apiKey }
        })
        .then(res => res.json())
        .then(json => {
            return json
        });
    }
}

export default RequestUtil;