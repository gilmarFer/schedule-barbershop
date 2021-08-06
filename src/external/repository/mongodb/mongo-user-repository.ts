import { LoginAUserRepository } from '../../../adapters/data/protocols/user/login-a-user';
import { RegisterNewUserRepository } from '../../../adapters/data/protocols/criptograph/register-new-user';
import { LoginAUser } from '../../../domain/usecases/user/login-a-user';
import { RegisterNewUser } from '../../../domain/usecases/admin/register-new-user';
import { MongoHelper } from './helpers/mongo-helper';

export class MongoUserRepository
  implements RegisterNewUserRepository, LoginAUserRepository
{
  async registerNewUser(
    params: RegisterNewUser.Params,
  ): Promise<RegisterNewUser.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.USER_COLLECTOINS || 'users',
    );
    const user = await userCollection.insertOne(params);
    const userWithFixId = MongoHelper.fixIdUnity(user.ops[0]);
    return { isValid: true, body: userWithFixId };
  }

  async isUserExists(email: string): Promise<RegisterNewUser.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.USER_COLLECTOINS || 'users',
    );
    const user = await userCollection.findOne({ email });
    if (!user) return { isValid: true, body: user };
    return { isValid: false, errorName: 'User not found' };
  }

  async loginAUser(params: LoginAUser.Params): Promise<LoginAUser.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.USER_COLLECTOINS || 'users',
    );
    const user = await userCollection.findOne({ email: params.email });
    if (!user) return { isValid: false, errorName: 'User not found' };
    return { isValid: true, body: user };
  }
}
