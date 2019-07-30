import Config from "../constants/config";
import LabelUtil from "../utils/LabelUtil";
import db from "../db/databaseHandler";

class TrackerController {
    constructor() {
        this.labelUtil = new LabelUtil();
        // this.getLabelsInProject = this.getLabelsInProject.bind(this);
        // this.getLabelByName = this.getLabelByName.bind(this);
        this.onTrackerEvent = this.onTrackerEvent.bind(this);
    }

    async getLatestSprint(req, res) {
        const projectId = req.params.projectId;
        let output = await db.getLatestSprintInfo(projectId);
        res.send(output);
    }

    async getSprint(req, res) {
        const projectId = req.params.projectId;
        const sprintNo = req.params.sprintNo;
        let output = await db.getHistory(projectId, sprintNo);
        res.send(output);
    }

    async getConfigurations(req, res) {
        let projectId = req.params.projectId;
        let config = await db.getConfigurations(projectId);
        let output = JSON.stringify(config.data);
        res.send(output);
    }

    async getHistoryDate(req, res) {
        const projectId = req.params.projectId;
        const sprintNo = req.params.sprintNo;
        let output = await db.getHistory(projectId, sprintNo)
        res.send(output);
    }

    async onTrackerEvent(req, res) {
        
        const storyJson = req.body;
        const storyId = storyJson.primary_resources[0].id;
        const projectId = storyJson.project.id;
        let storyType = storyJson.primary_resources[0].story_type;
        const state = storyJson.highlight;
        console.log("story type: " + storyType);
        console.log("story state: " + state);
        let config = await db.getConfigurations(projectId);
        
        await this.labelUtil.tagStoryWithLabel(state, storyType, storyId, projectId, config.data);
        res.send("request received")
    }

    // async getLabelsInProject(req, res) {
        
    //     const projectId = req.params.projectId;
    //     let labels = await this.labelUtil.getLabelsByProject(projectId);
    //     res.send(labels);
    // }

    // async getLabelByName(req, res) {
    //     const projectId = req.params.projectId;
    //     const queryName = req.params.queryName;
    //     let labels = await this.labelUtil.getLabelsByProject(projectId);
    //     let label = await this.labelUtil.getLabelByName(queryName, labels);
    //     res.send(label);
    // }
}

export default TrackerController;