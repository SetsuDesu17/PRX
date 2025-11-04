const db = require('../database');

const user = {
    signIn: async (userData) => {
        return new Promise ((resolve, reject) => {
            const { username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel, userIsLoggedIn} = userData;
            db.query(
                'INSERT INTO users (username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel, userIsLoggedIn) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel, 'FALSE'],
                (err, results) => {
                    resolve({ id: results.insertId, ...userData});
                }
            );
        });
    },

    logIn: async (userData) => {
        return new Promise ((resolve, reject) => {
            const { username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel, userIsLoggedIn} = userData;
            db.query(
                'SELECT * FROM users WHERE username = ? AND password = ?',
                [username, password],
                (err, results) => {
                    if (err) reject(err);
                    resolve(console.log('Successfully Logged In! Welcome ?! \n ?', [username, results]), updateOnlineStatus(results));
                }
            );
        });
    },

    updateOnlineStatus: async (userData) => {
        return new Promise ((resolve, reject) => {
            const { id, username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel, userIsLoggedIn} = userData;
            db.query(
                'UPDATE users SET userIsLoggedIn = \'TRUE\' WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    user: async () => {
        return new Promise ((resolve, reject) => {
            db.query(
                'SELECT username, userStatus, userClass, userSection, userYearLevel FROM users WHERE userIsLoggedIn = ?',
                ['TRUE'],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        }); 
    },

    getUserById: async (id) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'SELECT username, userStatus, userClass, userSection, userYearLevel FROM users WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        }); 
    },

    changeUsername: async (id, username) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'UPDATE users SET username = ? WHERE id = ?',
                [username, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    changePassword: async (id, password) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'UPDATE users SET password = ? WHERE id = ?',
                [password, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    changePrivilege: async (id, userPrivilege) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'UPDATE users SET userPrivilege = ? WHERE id = ?',
                [userPrivilege, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    deleteAccount: async (id) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'DELETE FROM users WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    addActivity: async (activity) => {
        return new Promise ((resolve, reject) => {
            const {activityName, activityType, activitySubject, activityDeadline, activityCreated, activityCreator, activityStatus, activityDescription} = activity;
            db.query(
                'INSERT INTO activities (activityName, activityType, activitySubject, activityDeadline, activityCreated, activityCreator, activityStatus, activityDescription) VALUES (? ? ? ? ? ? ? ?)',
                [activityName, activityType, activitySubject, activityDeadline, activityCreated, activityCreator, activityStatus, activityDescription],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    updateActivity: async (id, activity) => {
        return new Promise ((resolve, reject) => {
            const {activityName, activityType, activitySubject, activityDeadline, activityCreated, activityCreator, activityStatus, activityDescription} = activity;
            db.query(
                'UPDATE activities SET activityName = ?, activityType = ?, activitySubject = ?, activityDeadline = ?, activityCreated = ?, activityCreator = ?, activityStatus = ?, activityDescription = ? WHERE id = ?',
                [activityName, activityType, activitySubject, activityDeadline, activityCreated, activityCreator, activityStatus, activityDescription, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    deleteActivity: async (id) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'DELETE FROM activities WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    getRequestsByStatus: async (status) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'SELECT * FROM requests WHERE activityStatus = ?',
                [status],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    updateRequestStatus: async (id, status) => {
        return new Promise ((resolve, reject) => {
            db.query(
                'UPDATE requests SET activityStatus = ? WHERE id = ?',
                [status, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    }

}