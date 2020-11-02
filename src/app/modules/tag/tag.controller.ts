import { config, Context, controller, get, inject, provide } from 'midway';

@provide()
@controller('/tag')
export class TagController {
  @inject()
  ctx: Context;

  @config('result')
  result: any;

  @inject('tagService')
  tagService: any;
  
  @get('/all')
  async getTagAll(ctx: Context) {
    const tagAll = await this.tagService.getTagAll();
    ctx.body = Object.assign({}, this.result.success, { data: tagAll });
  }

  @get('/:tagId')
  async getTag(ctx: Context) {
    const tagId = ctx.params.tagId;
    const tag = await this.tagService.getTag(tagId);
    ctx.body = Object.assign({}, this.result.success, { data: tag });
  }

  @get('/remove/:tagId')
  async removeTag(ctx: Context) {
    const tagId = ctx.params.tagId;
    const tag = await this.tagService.removeTag(tagId);
    ctx.body = Object.assign({}, this.result.success, { data: tag })
  }
}
