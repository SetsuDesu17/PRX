import database from '../database.js';

const requests = {
    getAllRequests: async () => {
        return new Promise((resolve, reject) => {
            database.query(
                'SELECT * FROM requests WHERE requestStatus = "Active" ORDER BY requestPublished ASC',
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

    getRequestsByDate: async (date, sort) => {
        return new Promise((resolve, reject) => {
            let sortValue = "";
            if (sort == "olderThan"){
                sortValue = ">";
            } else if (sort == "earlierThan"){
                sortValue = "<";
            }
            database.query(
                `SELECT * FROM requests WHERE requestPublished ${sortValue}= ?`,
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
            const {requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublisher, requestDescription, requestStatus } = request;
            const requestPublished = new Date().toISOString();
            database.query(
                'INSERT INTO requests (requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
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