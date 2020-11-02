import { config, Context, controller, get, inject, post, provide } from 'midway';

@provide()
@controller('/question')
export class QuestionController {
  
  @config('result')
  result: any;

  @inject()
  ctx: Context;

  @inject('questionService')
  questionService: any;

  @post()
  async createQuestion(ctx: Context) {
    // title: string;
    const requestBody = ctx.request.body;
    const question = await this.questionService.createQuestion(requestBody);
    ctx.body = Object.assign({}, this.result.success, {data: question});
  }

  @get()
  async getQuestionAll(ctx: Context) {
    const questionAll = await this.questionService.getQuestionAll();
    ctx.body = Object.assign({}, this.result.success, {data: questionAll});
  }

  @get('/:id')
  async getQuestion(ctx: Context) {
    const id: number = ctx.params.id;
    const question = await this.questionService.getQuestion(id);
    ctx.body = Object.assign({}, this.result.success, {data: question});
  }

  @post()
  async updateQuestion(ctx: Context) {
    const options = ctx.request.body;
    const question = await this.questionService.updateQuestion(options);
    ctx.body = Object.assign({}, this.result.success, {data: question});
  }
}