import { Router } from 'express';
import { adaptRoute } from '../adapter/express-router-adapters';
import { makeLoginAUserController } from '../factore/user/login-a-user';
import { makeRegisterNewUserControler } from '../factore/user/register-new-user';

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterNewUserControler()));
  router.post('/login', adaptRoute(makeLoginAUserController()));
};
