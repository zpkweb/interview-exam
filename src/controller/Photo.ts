import { provide, controller, inject, Context, get } from 'midway';
import { getManager, getRepository } from 'typeorm';
import { Photo } from '../model/Photo';

@provide()
@controller('/photo')
export class PhotoController {
  @inject()
  ctx: Context;

  @get()
  async getAll() {
    const photo = await getManager().find(Photo);
    this.ctx.body = {success: true, message: 'OK', data: photo};

  }

  @get('/:id')
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const user: Photo = await getRepository(Photo).findOne(id);
    this.ctx.body = {success: true, message: 'OK', data: user};
  }
}
