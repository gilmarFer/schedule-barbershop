import { RegisterNewUser } from '../../../../domain/usecases/user/register-new-user';
import {
  badRequest,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class RegisterNewUserController implements Controller {
  constructor(private readonly registerNewUser: RegisterNewUser) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password, barber, phone } = httpRequest.body;
      if (!name || !email || !password || !barber || !phone)
        return badRequest(
          new Error('Name, email, password, barber or phone are invalid'),
        );
      const user = await this.registerNewUser.register({
        name,
        email,
        password,
        barber,
        phone,
      });
      if (!user.isValid) return badRequest(new Error(user.errorName));
      return ok(user.body);
    } catch (error) {
      return serverError(error.message);
    }
  }
}
