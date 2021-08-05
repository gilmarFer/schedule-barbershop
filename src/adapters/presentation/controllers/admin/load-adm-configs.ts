import { LoadAdmConfigsAbstract } from '../../../data/usecases/admin/load-adm-configs';
import {
  badRequest,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class LoadAdmConfigsController implements Controller {
  constructor(
    private readonly loadAdmConfigsAbstract: LoadAdmConfigsAbstract,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { key } = httpRequest.body;
      if (!key) return badRequest(new Error('ACCESS NEDIED'));
      const admConfig = await this.loadAdmConfigsAbstract.load({ key });
      if (!admConfig.isValid) return badRequest(new Error(admConfig.errorName));
      return ok(admConfig.body);
    } catch (error) {
      return serverError(error.message);
    }
  }
}
