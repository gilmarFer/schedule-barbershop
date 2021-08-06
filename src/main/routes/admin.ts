import { Router } from 'express';
import { adaptRoute } from '../adapter/express-router-adapters';
import { makeLoadAdmConfigController } from '../factore/admin/load-adm-config';
import { makeSaveAdmConfigController } from '../factore/admin/save-adm-config';
import { makeRegisterNewUserControler } from '../factore/user/register-new-user';

export default (router: Router): void => {
  router.post('/save-adm-config', adaptRoute(makeSaveAdmConfigController()));
  router.post('/load-adm-config', adaptRoute(makeLoadAdmConfigController()));
  router.post('/register', adaptRoute(makeRegisterNewUserControler()));
};
