import { LoginAUserAbstract } from '../../../data/usecases/user/login-a-user';
import {
  badRequest,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class LoginAUserController implements Controller {
  constructor(private readonly loginAUserAbstract: LoginAUserAbstract) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body;
      if (!email || !password)
        return badRequest(new Error('Email or password are invalid'));
      const user = await this.loginAUserAbstract.login({ email, password });
      if (!user.isValid) return badRequest(new Error(user.errorName));
      return ok({ key: user.body });
    } catch (error) {
      return serverError(error.message);
    }
  }
}
