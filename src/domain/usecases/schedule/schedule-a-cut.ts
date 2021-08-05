export interface ScheduleACut {
  add(userData: ScheduleACut.Params): Promise<ScheduleACut.Result>;
}

export namespace ScheduleACut {
  export type Params = {
    name: string;
    phone: number;
    date: Date;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
