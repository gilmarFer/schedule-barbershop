import { Router } from 'express';
import { adaptRoute } from '../adapter/express-router-adapters';
import { makeLoginAUserController } from '../factore/user/login-a-user';

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeLoginAUserController()));
};
