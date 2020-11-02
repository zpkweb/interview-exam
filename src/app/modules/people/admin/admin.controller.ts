import { config, Context, controller, get, inject, post, provide } from 'midway';

@provide()
@controller('/admin')
export class AdminController {
  @inject()
  ctx: Context;

  @config('result')
  result: any;

  @inject('adminService')
  adminService: any;

  @get('/:payload')
  async getAdmin(ctx: Context) {
    const payload = ctx.params.payload;
    const admin = await this.adminService.getAdmin(payload);
    ctx.body = Object.assign({}, this.result.success, { data: admin });
  }

  @get('/type/:payload')
  async getAdminType(ctx: Context) {
    const payload = ctx.params.payload;
    const admin = await this.adminService.getAdminType(payload);
    ctx.body = Object.assign({}, this.result.success, { data: admin });
  }

  @post('/createTag')
  async createTag(ctx: Context) {
    const requestBody = ctx.request.body;
    const tag = await this.adminService.createTag(requestBody);
    ctx.body = Object.assign({}, this.result.success, { data: tag });
  }

  
}
