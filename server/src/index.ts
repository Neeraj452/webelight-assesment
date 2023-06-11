
import express from 'express';
import './database/connection';
import router from './router/rauter';
import cors from 'cors'
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use('/', router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

