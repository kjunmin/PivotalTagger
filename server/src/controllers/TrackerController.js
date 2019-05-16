
const TrackerController = {
    async onTrackerEvent(req, res) {
        const trackerData = req.body;
        console.log(body);
        res.send("request received")
    }
}

export default TrackerController;