import { LoginAUser } from '../../../../domain/usecases/user/login-a-user';
import { Encrypter } from '../../protocols/criptograph/pass';
import { LoginAUserRepository } from '../../protocols/user/login-a-user';

export class LoginAUserAbstract implements LoginAUser {
  constructor(
    private readonly loginAUserRepository: LoginAUserRepository,
    private readonly decrypter: Encrypter,
  ) {}

  async login(params: LoginAUser.Params): Promise<LoginAUser.Result> {
    const user = await this.loginAUserRepository.loginAUser(params);
    if (!user.isValid) return { isValid: false, errorName: user.errorName };
    const comparePass = await this.decrypter.decrypterPass({
      userPass: params.password,
      dbPass: user.body.password,
    });
    if (!comparePass) return { isValid: false, errorName: 'Access denid' };
    return { isValid: true, body: process.env.SERVER_KEY };
  }
}
