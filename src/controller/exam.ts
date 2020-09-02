import { controller, provide, inject, Context, get } from 'midway';

@provide()
@controller('/exam')
export class Exam {

  @inject()
  ctx: Context;

  @get()
  async exam() {
    this.ctx.body = 'exam';
  }
}
