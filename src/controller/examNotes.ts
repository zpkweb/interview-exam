import { controller, provide, inject, Context, get } from 'midway';

@provide()
@controller('examNotes')

export class ExamNotes {

  @inject()
  ctx: Context;

  @get()
  async examNotes() {
    this.ctx.body = 'examNotes';
  }
}
