import { ScheduleACut } from '../../../../domain/usecases/schedule/schedule-a-cut';

export interface ScheduleACutRepository {
  addNewschedule(userData: ScheduleACut.Params): Promise<ScheduleACut.Result>;
  isHourFree(date: Date): Promise<ScheduleACut.Result>;
  fakeAdmFreeDates(): Promise<{ days: number[]; hours: Date[] }>;
}
