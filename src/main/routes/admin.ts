import { Router } from 'express';
import { adaptRoute } from '../adapter/express-router-adapters';
import { makeLoadAdmConfigController } from '../factore/admin/load-adm-config';
import { makeSaveAdmConfigController } from '../factore/admin/save-adm-config';

export default (router: Router): void => {
  router.post('/save-adm-config', adaptRoute(makeSaveAdmConfigController()));
  router.post('/load-adm-config', adaptRoute(makeLoadAdmConfigController()));
};
