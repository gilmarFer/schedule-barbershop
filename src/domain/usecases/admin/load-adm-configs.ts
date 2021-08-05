export interface LoadAdmConfigs {
  load(params: LoadAdmConfigs.Params): Promise<LoadAdmConfigs.Result>;
}

export namespace LoadAdmConfigs {
  export type Params = {
    key: string;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
