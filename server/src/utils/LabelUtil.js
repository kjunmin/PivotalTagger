import RequestUtil from "./RequestUtil";
import Config from "../constants/config";
import PTConstants from '../constants/PTConstants';
import PtUtil from "./PtUtil";

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

    async tagStoryWithLabel(state, storyType, storyId, projectId, config) {
        
        if (state == PTConstants.STORY_STATE.FINISHED || state == PTConstants.STORY_STATE.ACCEPTED) {
            let isStoryTypeTaggable = false;
            switch(storyType) {
                case PTConstants.STORY_TYPE.FEATURE: 
                    isStoryTypeTaggable = config.feature_tagging;
                    break;
                case PTConstants.STORY_TYPE.CHORE:
                    isStoryTypeTaggable = config.chore_tagging;
                    break;
                case PTConstants.STORY_TYPE.BUGFIX:
                    isStoryTypeTaggable = config.bugfix_tagging;
                    break;
            }
    
            if (isStoryTypeTaggable && config.release_tagging) {

                let tagDate = config.release_date;
                if (Date.now() >=  new Date(tagDate)) {
                    tagDate.setDate(tagDate.getDate() + 14);
                }
                console.log("tagging release");
                await PtUtil.updateStory(PTConstants.EVENT_TYPE.RELEASE, storyId, projectId, tagDate);
            } 
            // if (isStoryTypeTaggable && config.review_tagging) {
            //     console.log("tagging review");
            //     await PtUtil.updateStory(PTConstants.EVENT_TYPE.REVIEW, storyId, projectId, config.review_date);
            // }
        }
    }
}

export default LabelUtil;