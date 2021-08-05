export interface RegisterNewUser {
  register(params: RegisterNewUser.Params): Promise<RegisterNewUser.Result>;
}

export namespace RegisterNewUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
    barber: string;
    phone: string;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
