import { LoadScheduleByDateAbstract } from '../../../adapters/data/usecases/admin/load-schedules-by-date';
import { AdmAuthAdapter } from '../../../adapters/infra/admin/adm-auth';
import { LoadScheduleByDateController } from '../../../adapters/presentation/controllers/admin/load-schedule-by-date';
import { Controller } from '../../../adapters/presentation/protocols/controller';
import { MongoScheduleRepository } from '../../../external/repository/mongodb/mongo-schedule-respository';

export const makeLoadScheduleByDateController = (): Controller => {
  const mongoScheduleRepository = new MongoScheduleRepository();
  const admAuth = new AdmAuthAdapter();
  const loadScheduleByDateAbstract = new LoadScheduleByDateAbstract(
    mongoScheduleRepository,
    admAuth,
  );
  return new LoadScheduleByDateController(loadScheduleByDateAbstract);
};
