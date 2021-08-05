import { LoadAdmConfigs } from '../../../../domain/usecases/admin/load-adm-configs';
import { AdmAuth } from '../../protocols/admin/is-adm-auth';
import { LoadAdmConfigsRepository } from '../../protocols/admin/load-adm-config';

export class LoadAdmConfigsAbstract implements LoadAdmConfigs {
  constructor(
    private readonly saveAdmConfigRepository: LoadAdmConfigsRepository,
    private readonly admAuth: AdmAuth,
  ) {}

  async load(params: LoadAdmConfigs.Params): Promise<LoadAdmConfigs.Result> {
    const isAdmAuth = this.admAuth.isAdmAuth(params.key);
    if (!isAdmAuth) return { isValid: false, errorName: 'ACCESS DENIED' };
    const admConfigs = await this.saveAdmConfigRepository.loadAdmConfig();
    return { isValid: true, body: admConfigs.body };
  }
}
