import { LoadScheduleByPhone } from '../../../domain/usecases/load-schedules-by-phone';

export interface LoadScheduleByPhoneRepository {
  loadByPhone(phone: string): Promise<LoadScheduleByPhone.Result>;
}
