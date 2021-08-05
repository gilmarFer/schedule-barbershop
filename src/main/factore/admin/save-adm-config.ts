import { SaveAdmConfigsAbstract } from '../../../adapters/data/usecases/admin/save-adm-configs';
import { AdmAuthAdapter } from '../../../adapters/infra/admin/adm-auth';
import { SaveAdmConfigsController } from '../../../adapters/presentation/controllers/admin/save-adm-configs';
import { Controller } from '../../../adapters/presentation/protocols/controller';
import { MongoAdmRepository } from '../../../external/repository/mongodb/mongo-adm-repository';

export const makeSaveAdmConfigController = (): Controller => {
  const mongoAdmRepository = new MongoAdmRepository();
  const admAuth = new AdmAuthAdapter();
  const saveAdmConfigsAbstract = new SaveAdmConfigsAbstract(
    mongoAdmRepository,
    admAuth,
  );
  return new SaveAdmConfigsController(saveAdmConfigsAbstract);
};
