import { LoadScheduleByDate } from '../../../../domain/usecases/admin/load-schedules-by-date';
import { AdmAuth } from '../../protocols/admin/is-adm-auth';
import { LoadScheduleByDateRepository } from '../../protocols/admin/load-schedule-by-date';

export class LoadScheduleByDateAbstract implements LoadScheduleByDate {
  constructor(
    private readonly loadScheduleByDateRepo: LoadScheduleByDateRepository,
    private readonly admAuth: AdmAuth,
  ) {}

  async load(
    params: LoadScheduleByDate.Params,
  ): Promise<LoadScheduleByDate.Result> {
    const isAdmAuth = this.admAuth.isAdmAuth(params.key);
    if (!isAdmAuth) return { isValid: false, errorName: 'ACCESS DENIED' };
    return this.loadScheduleByDateRepo.loadByDate(params);
  }
}
