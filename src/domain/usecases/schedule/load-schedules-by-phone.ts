export interface LoadScheduleByPhone {
  load(phone: string): Promise<LoadScheduleByPhone.Result>;
}

export namespace LoadScheduleByPhone {
  export type Params = {
    phone: string;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
