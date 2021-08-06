export interface LoadScheduleByDate {
  load(params: LoadScheduleByDate.Params): Promise<LoadScheduleByDate.Result>;
}

export namespace LoadScheduleByDate {
  export type Params = {
    initialDate: Date;
    finalDate: Date;
    key: string;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
