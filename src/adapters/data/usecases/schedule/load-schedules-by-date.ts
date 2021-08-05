import { LoadScheduleByDate } from '../../../../domain/usecases/schedule/load-schedules-by-date';
import { LoadScheduleByDateRepository } from '../../protocols/schedule/load-schedule-by-date';

export class LoadScheduleByDateAbstract implements LoadScheduleByDate {
  constructor(
    private readonly loadScheduleByDateRepo: LoadScheduleByDateRepository,
  ) {}

  load(params: LoadScheduleByDate.Params): Promise<LoadScheduleByDate.Result> {
    return this.loadScheduleByDateRepo.loadByDate(params);
  }
}
