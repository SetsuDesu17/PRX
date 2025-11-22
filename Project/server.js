import express, { json, urlencoded } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import activitiesRoutes from './routes/activitiesRoutes.js'
import requestsRoutes from './routes/requestsRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/abs/users', userRoutes);
app.use('/abs/activities', activitiesRoutes);
app.use('/abs/requests', requestsRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
//   console.log(`API URL: http://localhost:${PORT}/api/students`);
});