import database from '../database.js';

const requests = {
    getAllRequests: async () => {
        return new Promise((resolve, reject) => {
            database.query(
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
            database.query(
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
            database.query(
                "SELECT * FROM requests WHERE id = ?",
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    getRequestsByDate: async (date) => {
        return new Promise((resolve, reject) => {
            database.query(
                "SELECT * FROM requests WHERE requestPublished <= ?",
                [date],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )  
        });
    },

    createRequest: async (request) => {
        return new Promise ((resolve, reject) => {
            const {requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus } = request;
            database.query(
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

export default requests;