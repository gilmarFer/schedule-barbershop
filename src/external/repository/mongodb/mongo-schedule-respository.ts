import { LoadScheduleByDateRepository } from '../../../adapters/data/protocols/schedule/load-schedule-by-date';
import { LoadScheduleByPhoneRepository } from '../../../adapters/data/protocols/schedule/load-schedule-by-phone';
import { ScheduleACutRepository } from '../../../adapters/data/protocols/schedule/schedule-a-cut-repository';
import { LoadScheduleByDate } from '../../../domain/usecases/schedule/load-schedules-by-date';
import { LoadScheduleByPhone } from '../../../domain/usecases/schedule/load-schedules-by-phone';
import { ScheduleACut } from '../../../domain/usecases/schedule//schedule-a-cut';
import { MongoHelper } from './helpers/mongo-helper';

export class MongoScheduleRepository
  implements
    ScheduleACutRepository,
    LoadScheduleByPhoneRepository,
    LoadScheduleByDateRepository
{
  async addNewschedule(
    userData: ScheduleACut.Params,
  ): Promise<ScheduleACut.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.SCHEDULE_COLLECTION || 'schedule',
    );
    const schedule = await userCollection.insertOne(userData);
    if (schedule.result.n < 1) {
      return { isValid: false };
    }
    const fixId = MongoHelper.fixIdUnity(schedule.ops[0]);
    return { isValid: true, body: fixId };
  }

  async isHourFree(date: Date): Promise<ScheduleACut.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.SCHEDULE_COLLECTION || 'schedule',
    );
    const schedule = await userCollection.findOne({ date });
    if (schedule) {
      return { isValid: false };
    }
    return { isValid: true };
  }

  async loadByPhone(phone: string): Promise<LoadScheduleByPhone.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.SCHEDULE_COLLECTION || 'schedule',
    );
    const scheduleList = await userCollection.find({ phone }).toArray();
    return {
      isValid: true,
      body: MongoHelper.fixIdList(scheduleList),
    };
  }

  async loadByDate(
    params: LoadScheduleByDate.Params,
  ): Promise<LoadScheduleByDate.Result> {
    const userCollection = await MongoHelper.getCollection(
      process.env.SCHEDULE_COLLECTION || 'schedule',
    );
    const scheludesList = await userCollection
      .find({
        date: {
          $gte: new Date(params.initialDate),
          $lt: new Date(params.finalDate),
        },
      })
      .toArray();
    const listWithFixId = MongoHelper.fixIdList(scheludesList);
    return { isValid: true, body: listWithFixId };
  }

  async fakeAdmFreeDates(): Promise<{ days: number[]; hours: Date[] }> {
    return Promise.resolve({
      days: [1, 2, 3, 4, 5],
      hours: [
        new Date('2000-01-01T08:00:00'),
        new Date('2000-01-01T08:30:00'),
        new Date('2000-01-01T09:00:00'),
        new Date('2000-01-01T09:30:00'),
        new Date('2000-01-01T10:00:00'),
        new Date('2000-01-01T10:30:00'),
        new Date('2000-01-01T11:00:00'),
        new Date('2000-01-01T11:30:00'),
        new Date('2000-01-01T12:00:00'),
      ],
    });
  }
}
