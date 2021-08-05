import { ScheduleACutAbstract } from '../../../adapters/data/usecases/schedule/schedule-a-cut';
import { ScheduleACutController } from '../../../adapters/presentation/controllers/schedule/schedule-a-cut';
import { MongoScheduleRepository } from '../../../external/repository/mongodb/mongo-schedule-respository';

export const makeScheduleACuteController = (): ScheduleACutController => {
  const mongoScheduleRepository = new MongoScheduleRepository();
  const scheduleACutAbstract = new ScheduleACutAbstract(
    mongoScheduleRepository,
  );
  return new ScheduleACutController(scheduleACutAbstract);
};
