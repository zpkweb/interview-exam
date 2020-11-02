import { provide, controller, inject, Context, get, post, del } from 'midway';
// import { getRepository } from 'typeorm';
// import { Photo } from '../model/Photo';
import { PhotoService } from '../interface/photo';

@provide()
@controller('/photos')
export class PhotoController {
  @inject()
  ctx: Context;

  @inject('photoService')
  server: PhotoService;

  @get()
  async getPhotoAll() {

    const photo = await this.server.getPhotoAll();
    this.ctx.body = {success: true, message: 'OK', data: photo};

  }

  @get('/:id')
  async getPhoto(ctx): Promise<void> {

    const id: number = ctx.params.id;
    // const user: Photo = await getRepository(Photo).findOne(id);
    const photo = await this.server.getPhoto(id);
    this.ctx.body = {success: true, message: 'OK', data: photo};

  }

  @post()
  async setPhoto(ctx) {
    const photo = await this.server.setPhoto(ctx.request.body);
    this.ctx.body = {success: true, message: 'OK', data: photo};
  }

  @del('/:id')
  async delPhoto(ctx) {
    const photo = await this.server.delPhoto(ctx.params.id);
    this.ctx.body = {success: true, message: 'OK', data: photo};
  }
}
