import { config, Context, controller, get, inject, post, provide } from 'midway';

@provide()
@controller('/superAdmin')
export class SuperadminController {
  @config('result')
  result: any;
  
  @inject()
  ctx: Context;

  @inject('superadminService')
  superadminService: any;

  @post('/createAdmin')
  async createAdmin(ctx: Context) {
    const requestBody = ctx.request.body;
    const admin = await this.superadminService.createAdmin(requestBody);
    ctx.body = Object.assign({}, this.result.success, { data: admin });
  }

  @get('/admin')
  async getAdminAll() {
    const admin = await this.superadminService.getAdminAll();
    this.ctx.body = Object.assign({}, this.result.success, { data: admin });
  }
}