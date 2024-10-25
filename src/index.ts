import express, { Express, Request, Response } from 'express';
// import { corsMiddleware } from './middlewares/cors';
import { router } from './routes/index';
import { chatgpt } from './controllers/chatgpt';
import cors from 'cors';

const PORT = process.env.PORT || 4000;
const app: Express = express();

app.use(cors());
// app.use(corsMiddleware);
app.use(express.json());

app.use('/api', router);

app.post('/api/v1/chatgpt', async (req: Request, res: Response) => {
  const { message } = req.body;
  // console.log(req.body);
  const response = await chatgpt(message);
  res.json(response); 
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Todo ok');
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
});