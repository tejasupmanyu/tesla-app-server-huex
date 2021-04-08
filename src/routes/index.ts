import * as Express from 'express';
import {
  allModels,
  model3Details,
  modelSConfigurationOptions,
  modelSDetails,
  modelXDetails,
  modelYDetails,
} from '../models';

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

router.get('/modelX', (_, res) => {
  res.send(modelXDetails);
});

router.get('/model3', (_, res) => {
  res.send(model3Details);
});

router.get('/modelY', (_, res) => {
  res.send(modelYDetails);
});

export default router;
