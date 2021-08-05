import { LoadAdmConfigs } from '../../../../domain/usecases/admin/load-adm-configs';

export interface LoadAdmConfigsRepository {
  loadAdmConfig(): Promise<LoadAdmConfigs.Result>;
}
