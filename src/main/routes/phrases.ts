import { Router } from 'express';
import { adaptRoute } from '../adapters/express-router';
import { makeLoadAllPhrasesController } from '../factories/loadAllPhrasesController';

export default (router: Router): void => {
  router.get('/phrases', adaptRoute(makeLoadAllPhrasesController()));
};
