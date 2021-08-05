import { LoadScheduleByDate } from '../../../../domain/usecases/schedule/load-schedules-by-date';
import {
  badRequest,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class LoadScheduleByDateController implements Controller {
  constructor(private readonly loadScheduleByDate: LoadScheduleByDate) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { initialDate, finalDate } = httpRequest.body;
      if (!initialDate || !finalDate)
        return badRequest(new Error('Initial date or final date are invalid'));
      const scheduleList = await this.loadScheduleByDate.load({
        initialDate,
        finalDate,
      });
      return ok(scheduleList.body);
    } catch (error) {
      return serverError(error.mesage);
    }
  }
}
