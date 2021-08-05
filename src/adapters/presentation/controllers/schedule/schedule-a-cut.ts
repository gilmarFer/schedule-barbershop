import { ScheduleACut } from '../../../../domain/usecases/schedule/schedule-a-cut';
import {
  HttpRequest,
  HttpResponse,
  serverError,
  badRequest,
  ok,
} from '../../helpers/http';
import { Controller } from '../../protocols/controller';

export class ScheduleACutController implements Controller {
  constructor(private readonly scheduleACut: ScheduleACut) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, phone, date } = httpRequest.body;
      if (!name || !phone || !date) {
        return badRequest(new Error('Name, phone or data is invalid'));
      }
      const dateToDate = new Date(date);
      if (dateToDate < new Date()) {
        return badRequest(new Error('You date is in the past'));
      }
      const schedule = await this.scheduleACut.add({
        name,
        phone,
        date: dateToDate,
      });
      if (!schedule.isValid) {
        return badRequest(new Error(schedule.errorName));
      }
      return ok(schedule.body);
    } catch (error) {
      return serverError(error.message);
    }
  }
}
