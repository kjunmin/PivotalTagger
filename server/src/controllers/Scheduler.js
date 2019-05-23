import cron from 'cron';
import Config from '../constants/config';
import db from '../db/databaseHandler';

const Scheduler = {

    async startScheduler() {
        const projectId = Config.PROJECT_ID;
        let sprintInfo = await db.getLatestSprintInfo(projectId);
        // let cronString = `4 * * * * *`;
        let cronString = `0 0 * * *`;
        console.log(cronString);
        
        let CronJob = cron.CronJob;
        new CronJob(cronString, () => {
            console.log("Starting Scheduler...");
            Scheduler.scheduleNewSprint(sprintInfo.data);
        }, null, true, 'Asia/Singapore');
    },

    scheduleNewSprint(currentSprintInfo) {
        if (Date.now() >=  new Date(currentSprintInfo.reviewDate)) {
            console.log(currentSprintInfo);
            const newSprintNo = currentSprintInfo.sprint_no + 1;
            let newSprintStartDate = new Date(currentSprintInfo.sprint_start_date);
            newSprintStartDate.setDate(newSprintStartDate.getDate() + 14);
            let newSprintReleaseDate = new Date(currentSprintInfo.release_date);
            newSprintReleaseDate.setDate(newSprintReleaseDate.getDate() + 14);
            let newSprintReviewDate = new Date(currentSprintInfo.review_date);
            newSprintReviewDate.setDate(newSprintReviewDate.getDate() + 14);

            let historyJson = {
                sprintNo: newSprintNo,
                projectId: currentSprintInfo.project_id,
                sprintStartDate: newSprintStartDate,
                releaseDate: newSprintReleaseDate,
                reviewDate: newSprintReviewDate
            }
            
            // db.updateHistory(historyJson)
            console.log(historyJson);
        }
    }
}

export default Scheduler;