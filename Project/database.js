import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'db_reminder'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;