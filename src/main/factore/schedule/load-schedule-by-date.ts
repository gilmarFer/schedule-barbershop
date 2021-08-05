import { LoadScheduleByDateAbstract } from '../../../adapters/data/usecases/schedule/load-schedules-by-date';
import { LoadScheduleByDateController } from '../../../adapters/presentation/controllers/schedule/load-schedule-by-date';
import { Controller } from '../../../adapters/presentation/protocols/controller';
import { MongoScheduleRepository } from '../../../external/repository/mongodb/mongo-schedule-respository';

export const makeLoadScheduleByDateController = (): Controller => {
  const mongoScheduleRepository = new MongoScheduleRepository();
  const loadScheduleByDateAbstract = new LoadScheduleByDateAbstract(
    mongoScheduleRepository,
  );
  return new LoadScheduleByDateController(loadScheduleByDateAbstract);
};
