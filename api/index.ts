import express from 'express';
import dotenv from "dotenv";
import { createServer } from 'http';
import cors from 'cors';
import errorHandler from '../src/middlewares/errorHandler';
import router from '../src/routes/indexRoutes';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://product-catalog-frontend-cxywrfl5c-emiliano-dantas-projects.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('/', router);
app.use(errorHandler);

// For local development
if (process.env.NODE_ENV !== 'production') {
  const server = createServer(app);
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the Express API for Vercel
export default app;