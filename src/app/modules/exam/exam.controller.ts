import { config, Context, controller, get, inject, post, provide } from 'midway';

@provide()
@controller('/exam')
export class ExamController {
  
  @config('result')
  result: any;

  @inject()
  ctx: Context;

  @inject('examService')
  examService: any;

  @post()
  async createExam(ctx: Context) {
    const options = ctx.request.body;
    const exam = await this.examService.createExam(options);
    ctx.body = Object.assign({}, this.result.success, {data: exam});
  }

  @get()
  async getExamAll(ctx: Context) {
    const examAll = await this.examService.getExamAll();
    ctx.body = Object.assign({}, this.result.success, { data: examAll });
  }

  @get('/:id')
  async getExam(ctx: Context) {
    const id: number = ctx.params.id;
    const examAll = await this.examService.getExam(id);
    ctx.body = Object.assign({}, this.result.success, { data: examAll });
  }

  @get('/user/:id')
  async getUserExam(ctx: Context) {
    const id: number = ctx.params.id;
    const userExam = await this.examService.getUserExam(id);
    ctx.body = Object.assign({}, this.result.success, { data: userExam });
  }

  @post('/update')
  async updateExam(ctx: Context) {
    const options = ctx.request.body;
    const exam = await this.examService.updateExam(options);
    ctx.body = Object.assign({}, this.result.success, {data: exam});
  }
}