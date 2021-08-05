import { LoadScheduleByPhoneAbstract } from '../../../adapters/data/usecases/schedule/load-schedule-by-phone';
import { LoadScheduleByPhoneController } from '../../../adapters/presentation/controllers/schedule/load-schedule-by-phone';
import { Controller } from '../../../adapters/presentation/protocols/controller';
import { MongoScheduleRepository } from '../../../external/repository/mongodb/mongo-schedule-respository';

export const makeLoadScheduleByPhoneController = (): Controller => {
  const mongoScheduleRepository = new MongoScheduleRepository();
  const loadScheduleByPhoneAbstract = new LoadScheduleByPhoneAbstract(
    mongoScheduleRepository,
  );
  return new LoadScheduleByPhoneController(loadScheduleByPhoneAbstract);
};
