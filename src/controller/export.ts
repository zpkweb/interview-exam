import { get, provide, controller, inject, Context } from 'midway';

@provide()
@controller('/export')

export class Export {

  @inject()
  ctx: Context;

  @get()
  async export() {
    this.ctx.body = 'export';
  }
}
