import database from '../database.js';

const user = {
    signIn: async (userData) => {
        return new Promise ((resolve, reject) => {
            const { username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel} = userData;
            database.query(
                'INSERT INTO users (username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel, userIsLoggedIn) VALUES (?, ?, ?, ?, ?, ?, ?, FALSE)',
                [username, password, userPrivilege, userStatus, userClass, userSection, userYearLevel],
                (err, results) => {
                    if (err) reject(err);
                    resolve({results});
                }
            );
        });
    },

    updateOnlineStatus: async (username, password) => {
        return new Promise ((resolve, reject) => {
            database.query(
                'UPDATE users SET userIsLoggedIn = "TRUE", userStatus = "Online" WHERE username = ? AND password = ?',
                [username, password],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    logIn: async (username, password) => {
        return new Promise ((resolve, reject) => {
            database.query(
                'SELECT * FROM users WHERE username = ? AND password = ?',
                [username, password],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    logOut: async () => {
        return new Promise ((resolve, reject) => {
            database.query(
                'UPDATE users SET userIsLoggedIn = "FALSE", userStatus = "Offline" WHERE userIsLoggedIn = 1',
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    getCurrentUser: async () => {
        return new Promise ((resolve, reject) => {
            database.query(
                'SELECT username, userStatus, userClass, userSection, userYearLevel FROM users WHERE userIsLoggedIn = "TRUE"',
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        }); 
    },

    getUserById: async (id) => {
        return new Promise ((resolve, reject) => {
            database.query(
                'SELECT username, userStatus, userClass, userSection, userYearLevel FROM users WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        }); 
    },

    updateUsername: async (id, value) => {
        return new Promise ((resolve, reject) => {
            const {username} = value;
            console.log(username);
            database.query(
                'UPDATE users SET username = ? WHERE id = ?',
                [username, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    updatePassword: async (id, value) => {
        return new Promise ((resolve, reject) => {
            const {password} = value;
            database.query(
                'UPDATE users SET password = ? WHERE id = ?',
                [password, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    updatePrivilege: async (id, userPrivilege) => {
        return new Promise ((resolve, reject) => {
            database.query(
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
            database.query(
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
            const {activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher, activityStatus, activityDescription} = activity;
            database.query(
                'INSERT INTO activities (activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher, activityStatus, activityDescription) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher, activityStatus, activityDescription],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    updateActivity: async (id, activity) => {
        return new Promise ((resolve, reject) => {
            const {activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher, activityStatus, activityDescription} = activity;
            database.query(
                'UPDATE activities SET activityName = ?, activityType = ?, activitySubject = ?, activityDeadline = ?, activityPublished = ?, activityPublisher = ?, activityStatus = ?, activityDescription = ? WHERE id = ?',
                [activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher, activityStatus, activityDescription, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    deleteActivity: async (id) => {
        return new Promise ((resolve, reject) => {
            database.query(
                'DELETE FROM activities WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    },

    

    updateRequestStatus: async (id, status) => {
        return new Promise ((resolve, reject) => {
            database.query(
                'UPDATE requests SET requestStatus = ? WHERE id = ?',
                [status, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        });
    }

}

export default user;