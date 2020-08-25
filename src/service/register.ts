import { provide } from 'midway';
import { registerService, registerOptions } from '../interface/register';

@provide('registerService')

export class RegisterService implements registerService {

  async getRegister() {
    return {
      name: '',
      phone : 0
    };
  }

  async setRegister(options: registerOptions) {
    return options;
  }
}
