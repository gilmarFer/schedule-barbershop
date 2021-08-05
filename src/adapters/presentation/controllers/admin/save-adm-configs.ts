import { SaveAdmConfigsAbstract } from '../../../data/usecases/admin/save-adm-configs';
import {
  badRequest,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class SaveAdmConfigsController implements Controller {
  constructor(
    private readonly saveAdmConfigsAbstract: SaveAdmConfigsAbstract,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { days, hours, key } = httpRequest.body;
      if (!days || !hours)
        return badRequest(new Error('Days or hours are invalid'));
      const saveConfig = await this.saveAdmConfigsAbstract.save({
        days,
        hours,
        key,
      });
      if (!saveConfig.isValid)
        return badRequest(new Error(saveConfig.errorName));
      return ok(saveConfig.body);
    } catch (error) {
      return serverError(error.message);
    }
  }
}
