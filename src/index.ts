import express from 'express';
import dotenv from "dotenv";
import {createServer} from 'http';
import cors from 'cors';
import errorHandler  from './middlewares/errorHandler';
import router from './routes/indexRoutes';

dotenv.config()

const app = express();
const server = createServer(app);


app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(errorHandler);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

