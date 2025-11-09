const db = require('../database.js');

const requests = {
    getRequests: async () => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM requests",
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    getRequestsByStatus: async (status) => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM requests WHERE requestStatus = ?",
                [status],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    getRequestsById: async (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM requests WHERE id = ?",
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    getRequestsByDatePublished: async (date, olderOrLater) => {
        return new Promise((resolve, reject) => {
            if (olderOrLater == "<"){
                db.query(
                    "SELECT * FROM requests WHERE requestPublished <= ?",
                    [date],
                    (err, results) => {
                        if (err) reject(err);
                        resolve(results);
                    }
                );
            } else {
                db.query(
                    "SELECT * FROM requests WHERE requestPublished >= ?",
                    [date],
                    (err, results) => {
                        if (err) reject(err);
                        resolve(results);
                    }
                );
            }
            
        });
    },

    createRequest: async (request) => {
        return new Promise ((resolve, reject) => {
            const {requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus } = request;
            db.query(
                'INSERT INTO requests (requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus ],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    }

}

module.exports = requests;