import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/routes'; 

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use user routes
app.use('/api', userRoutes); // Prefix routes with '/api'

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
