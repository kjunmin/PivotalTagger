import Config from "../constants/config";
import fetch from 'node-fetch';

const PtUtil = {
    async updateStory(labelType, storyId, projectId, date) {
        // let storyDetails = await PtUtil.getStoryById(storyId, projectId);
        PtUtil.tagLabel(labelType, storyId, projectId, date);
    },

    async getStoryById(storyId, projectId) {
        let url = Config.PT_BASE_URL;
        url += `/projects/`;
        url += projectId;
        url += "/stories/";
        url += storyId;

        let storyDetails = await fetch(url, { method: "get", headers: {
                'X-TrackerToken': Config.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .then(json => {
                return json;
            });
        return storyDetails;
    },

    getLabels(storyJson) {
        const labels = storyJson.labels;
        return labels;
    },

    tagLabel(labelType, storyId, projectId, date) {
        let url = Config.PT_BASE_URL;
        url += `/projects/`;
        url += projectId;
        url += "/stories/";
        url += storyId;
        url += "/labels"
        
        console.log(url);
        
        let dateStr = PtUtil.formatDate(date);

        let body = {
            name: `${dateStr} ${labelType}`
        }

        fetch(url, { 
            method: "post", 
            body: JSON.stringify(body),
            headers: {
                'X-TrackerToken': Config.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .then(json => {
                console.log(json);
            });
    },

    formatDate(date){
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString();
        let year = d.getFullYear().toString();
        let day = d.getDate().toString();
        return `${year}-${month.padStart(2, 0)}-${day.padStart(2, 0)}`;
    }
}

export default PtUtil;