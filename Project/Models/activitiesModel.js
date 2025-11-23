import database from '../database.js';

const activities = {
    getAllActivity: async () => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM activities",
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },
    getActivitiesByStatus: async (status) => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM activities WHERE activityStatus = ?",
                [status],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },
    getActivitiesByDeadline: async (date) => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM activities WHERE activityDeadline <= ?",
                [date],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },
    getActivitiesByType: async (type) => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM activities WHERE activityType = ?",
                [type],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },
    getActivitiesBySubject: async (subject) => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM activities WHERE activitySubject = ?",
                [subject],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },
    createActivity: async (request) => {
        return new Promise ((resolve, reject) => {
            const {activityName, activityType, activitySubject, activityDeadline, activityDescription } = request;
            database.query(
                'INSERT INTO activities (requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [activityName, activityType, activitySubject, activityDeadline, activityDescription],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    }
}

export default activities;
