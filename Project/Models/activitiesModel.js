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
    getActivitiesById: async (id) => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM activities WHERE id = ?",
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
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
    getActivitiesByDeadline: async (date, sort) => {
        return new Promise((resolve, reject) => {
            let sortValue = "";
            if (sort == "olderThan"){
                sortValue = ">";
            } else if (sort == "earlierThan"){
                sortValue = "<";
            }
            database.query(
                `SELECT * FROM activities WHERE activityDeadline ${sortValue}= ?`,
                [date],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )  
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
}

export default activities;
