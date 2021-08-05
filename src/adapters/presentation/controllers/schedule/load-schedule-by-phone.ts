import { LoadScheduleByPhone } from '../../../../domain/usecases/schedule/load-schedules-by-phone';
import {
  badRequest,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class LoadScheduleByPhoneController implements Controller {
  constructor(private readonly loadScheduleByPhone: LoadScheduleByPhone) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { phone } = httpRequest.body;
      if (!phone) return badRequest(new Error('Phone is invalid'));
      const scheduleList = await this.loadScheduleByPhone.load(phone);
      return ok(scheduleList.body);
    } catch (error) {
      return serverError(error.mesage);
    }
  }
}
