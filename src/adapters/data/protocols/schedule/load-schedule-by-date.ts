import { LoadScheduleByDate } from '../../../../domain/usecases/schedule/load-schedules-by-date';

export interface LoadScheduleByDateRepository {
  loadByDate(
    phone: LoadScheduleByDate.Params,
  ): Promise<LoadScheduleByDate.Result>;
}
