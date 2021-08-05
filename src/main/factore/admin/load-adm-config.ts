import { LoadAdmConfigsAbstract } from '../../../adapters/data/usecases/admin/load-adm-configs';
import { AdmAuthAdapter } from '../../../adapters/infra/admin/adm-auth';
import { LoadAdmConfigsController } from '../../../adapters/presentation/controllers/admin/load-adm-configs';
import { Controller } from '../../../adapters/presentation/protocols/controller';
import { MongoAdmRepository } from '../../../external/repository/mongodb/mongo-adm-repository';

export const makeLoadAdmConfigController = (): Controller => {
  const mongoAdmRepository = new MongoAdmRepository();
  const admAuth = new AdmAuthAdapter();
  const loadAdmConfigAbstract = new LoadAdmConfigsAbstract(
    mongoAdmRepository,
    admAuth,
  );
  return new LoadAdmConfigsController(loadAdmConfigAbstract);
};
