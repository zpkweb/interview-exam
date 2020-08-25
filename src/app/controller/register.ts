import { provide, controller, inject, Context, get, post, plugin } from 'midway';
import { registerResult, registerOptions } from '../../interface/register';

@provide()
@controller('/register')
export class Register {

  @inject()
  ctx: Context;

  @plugin()
  mysql;
  
  @inject('registerService')
  register: {
    getRegister: () => Promise<registerResult>;
    setRegister: (options: registerOptions) => Promise<registerResult>;
  };

  @get()
  async getRegister(ctx) {
    const getRegister = await this.register.getRegister();
    ctx.body = {success: true, message: 'OK', data: getRegister};
  }

  @post()
  async setRegister(ctx) {
    console.log('setregister', ctx.request.body);
    const setRegister = await this.register.setRegister(ctx.request.body);
    ctx.body = {success: true, message: 'OK', data: setRegister};
  }
}
