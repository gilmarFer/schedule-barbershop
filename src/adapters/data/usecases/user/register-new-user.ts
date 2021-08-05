import { RegisterNewUser } from '../../../../domain/usecases/user/register-new-user';
import { Encrypter } from '../../protocols/criptograph/pass';
import { RegisterNewUserRepository } from '../../protocols/user/register-new-user';

export class RegisterNewUserAbstract implements RegisterNewUser {
  constructor(
    private readonly registerNewUserRepository: RegisterNewUserRepository,
    private readonly encrypterPass: Encrypter,
  ) {}

  async register(
    params: RegisterNewUser.Params,
  ): Promise<RegisterNewUser.Result> {
    const isUserExists = await this.registerNewUserRepository.isUserExists(
      params.email,
    );
    if (!isUserExists.isValid)
      return { isValid: false, errorName: 'User already exists' };
    const encrypterPass = await this.encrypterPass.encrypterPass(
      params.password,
    );
    const userWithHashedPass = { ...params, password: encrypterPass };
    const user = await this.registerNewUserRepository.registerNewUser(
      userWithHashedPass,
    );
    delete user.body.password;
    return { isValid: true, body: user.body };
  }
}
