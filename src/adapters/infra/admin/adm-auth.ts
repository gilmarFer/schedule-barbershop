import { AdmAuth } from '../../data/protocols/admin/is-adm-auth';

export class AdmAuthAdapter implements AdmAuth {
  isAdmAuth(key: string): boolean {
    const serverKey = process.env.SERVER_KEY;
    if (serverKey != key) return false;
    return true;
  }
}
