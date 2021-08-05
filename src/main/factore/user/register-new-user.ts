import { RegisterNewUserAbstract } from '../../../adapters/data/usecases/user/register-new-user';
import { BcrypterAdapter } from '../../../adapters/infra/criptograph/bcrypter-adapter';
import { RegisterNewUserController } from '../../../adapters/presentation/controllers/user/register-new-user';
import { MongoUserRepository } from '../../../external/repository/mongodb/mongo-user-repository';

export const makeRegisterNewUserControler = (): RegisterNewUserController => {
  const mongoUserRepository = new MongoUserRepository();
  const encrypter = new BcrypterAdapter(12);
  const registerNewUserAbstract = new RegisterNewUserAbstract(
    mongoUserRepository,
    encrypter,
  );
  return new RegisterNewUserController(registerNewUserAbstract);
};
