import { Context, controller, get, inject, provide } from 'midway';
import { IUserService, IUserResult } from '../interface/user';

@provide()
@controller('/users')
export class UserControllers {

  @inject()
  ctx: Context;

  @inject('userServices')
  service: IUserService;

  @get('/:id')
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const user: IUserResult = await this.service.getUser({id});
    this.ctx.body = {success: true, message: 'OK', data: user};
  }
}
