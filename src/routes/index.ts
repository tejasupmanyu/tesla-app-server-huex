import * as Express from 'express';
import { allModels, modelSConfigurationOptions, modelSDetails } from '../models';

const router = Express.Router();

router.get('/all', (_, res) => {
  res.send(allModels);
});

router.get('/modelS', (_, res) => {
  res.send(modelSDetails);
});

router.get('/modelS/configure', (_, res) => {
  res.send(modelSConfigurationOptions);
});

export default router;
