import { LoadScheduleByPhone } from '../../../../domain/usecases/schedule/load-schedules-by-phone';
import { LoadScheduleByPhoneRepository } from '../../protocols/schedule/load-schedule-by-phone';

export class LoadScheduleByPhoneAbstract implements LoadScheduleByPhone {
  constructor(
    private readonly loadScheduleByPhoneRepo: LoadScheduleByPhoneRepository,
  ) {}

  load(phone: string): Promise<LoadScheduleByPhone.Result> {
    return this.loadScheduleByPhoneRepo.loadByPhone(phone);
  }
}
