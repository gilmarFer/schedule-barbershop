import { RegisterNewUser } from '../../../../domain/usecases/admin/register-new-user';

export interface RegisterNewUserRepository {
  registerNewUser(
    params: RegisterNewUser.Params,
  ): Promise<RegisterNewUser.Result>;
  isUserExists(email: string): Promise<RegisterNewUser.Result>;
}
