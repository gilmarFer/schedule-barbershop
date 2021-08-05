export interface Encrypter {
  encrypterPass(pass: string): Promise<string>;
  decrypterPass(params: Encrypter.Params): Promise<boolean>;
}

export namespace Encrypter {
  export type Params = {
    dbPass: string;
    userPass: string;
  };
}
