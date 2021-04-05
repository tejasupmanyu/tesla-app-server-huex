import * as express from 'express';
import router from './routes';

const app = express();
const PORT = 9100;

// Application routing
app.use('/healthCheck', (req: express.Request, res: express.Response) => {
  res.status(200).send({ data: 'Working Fine' });
});

app.use('/models', router);

app.listen(PORT, () => console.log('server is running on port ', PORT));
