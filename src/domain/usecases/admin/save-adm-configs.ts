export interface SaveAdmConfigs {
  save(params: SaveAdmConfigs.Params): Promise<SaveAdmConfigs.Result>;
}

export namespace SaveAdmConfigs {
  export type Params = {
    days: number[];
    hours: Date[];
    key: string;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
