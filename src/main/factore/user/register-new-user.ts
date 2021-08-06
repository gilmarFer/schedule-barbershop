import { RegisterNewUserAbstract } from '../../../adapters/data/usecases/admin/register-new-user';
import { AdmAuthAdapter } from '../../../adapters/infra/admin/adm-auth';
import { BcrypterAdapter } from '../../../adapters/infra/criptograph/bcrypter-adapter';
import { RegisterNewUserController } from '../../../adapters/presentation/controllers/admin/register-new-user';
import { MongoUserRepository } from '../../../external/repository/mongodb/mongo-user-repository';

export const makeRegisterNewUserControler = (): RegisterNewUserController => {
  const mongoUserRepository = new MongoUserRepository();
  const encrypter = new BcrypterAdapter(12);
  const admAuth = new AdmAuthAdapter();
  const registerNewUserAbstract = new RegisterNewUserAbstract(
    mongoUserRepository,
    encrypter,
    admAuth,
  );
  return new RegisterNewUserController(registerNewUserAbstract);
};
