export interface LoginAUser {
  login(params: LoginAUser.Params): Promise<LoginAUser.Result>;
}

export namespace LoginAUser {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    isValid: boolean;
    errorName?: string;
    body?: any;
  };
}
