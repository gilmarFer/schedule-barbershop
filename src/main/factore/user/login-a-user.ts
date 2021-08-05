import { LoginAUserAbstract } from '../../../adapters/data/usecases/user/login-a-user';
import { BcrypterAdapter } from '../../../adapters/infra/criptograph/bcrypter-adapter';
import { LoginAUserController } from '../../../adapters/presentation/controllers/user/login-a-user';
import { Controller } from '../../../adapters/presentation/protocols/controller';
import { MongoUserRepository } from '../../../external/repository/mongodb/mongo-user-repository';

export const makeLoginAUserController = (): Controller => {
  const mongoUserRepo = new MongoUserRepository();
  const decrypter = new BcrypterAdapter(12);
  const loginAUserAbstract = new LoginAUserAbstract(mongoUserRepo, decrypter);
  return new LoginAUserController(loginAUserAbstract);
};
