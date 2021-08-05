import { RegisterNewUser } from '../../../../domain/usecases/user/register-new-user';

export interface RegisterNewUserRepository {
  registerNewUser(
    params: RegisterNewUser.Params,
  ): Promise<RegisterNewUser.Result>;
  isUserExists(email: string): Promise<RegisterNewUser.Result>;
}
