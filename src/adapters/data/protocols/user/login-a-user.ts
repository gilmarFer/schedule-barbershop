import { LoginAUser } from '../../../../domain/usecases/user/login-a-user';

export interface LoginAUserRepository {
  loginAUser(params: LoginAUser.Params): Promise<LoginAUser.Result>;
}
