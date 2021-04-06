import * as express from 'express';
import * as cors from 'cors';
import router from './routes';

const app = express();
const PORT = 9100;

app.use(cors());

// Application routing
app.use('/healthCheck', (req: express.Request, res: express.Response) => {
  res.status(200).send({ data: 'Working Fine' });
});

app.use('/models', router);

app.listen(process.env.PORT || PORT, () => console.log('server is running on port ', PORT));
