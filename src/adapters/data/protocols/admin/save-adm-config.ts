import { SaveAdmConfigs } from '../../../../domain/usecases/admin/save-adm-configs';

export interface SaveAdmConfigsRepository {
  saveAdmConfig(params: SaveAdmConfigs.Params): Promise<SaveAdmConfigs.Result>;
}
