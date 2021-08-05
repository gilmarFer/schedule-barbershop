import bcrypt from 'bcrypt';

import { Encrypter } from '../../data/protocols/criptograph/pass';

export class BcrypterAdapter implements Encrypter {
  constructor(private readonly salt: number) {}

  async encrypterPass(pass: string): Promise<string> {
    return await bcrypt.hash(pass, this.salt);
  }
  async decrypterPass(params: Encrypter.Params): Promise<boolean> {
    return await bcrypt.compare(params.userPass, params.dbPass);
  }
}
