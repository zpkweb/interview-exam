import { provide, controller, inject, Context, post, get, config, del, put } from 'midway';
import { UserResult } from './user.interface';

@provide()
@controller('/user')
export class UserController {

  @config('result')
  result: any;

  @inject()
  ctx: Context;

  @inject('userService')
  userService: any;

  @inject('examService')
  examService: any;

  @post()
  async createUser(ctx: Context) {
  
    const user: UserResult = await this.userService.createUser(ctx.request.body);
    ctx.body = Object.assign({}, this.result.success, { data: user });
  
  }

  @get()
  async getUserAll(ctx: Context) {
    
    const userAll: [UserResult] = await this.userService.getUserAll();
    ctx.body = Object.assign({}, this.result.success, { data: userAll });

  }

  @get('/:id')
  async getUser(ctx: Context) {

    const id: number = ctx.params.id;
    const user: UserResult = await this.userService.getUser(id);
    ctx.body = Object.assign({}, this.result.success, { data: user });

  }

  @put()
  @post('/update')
  async update(ctx: Context) {

    const requestBody = ctx.request.body;
    const userUpdate = await this.userService.updateUser(requestBody);
    ctx.body = Object.assign({}, this.result.success, { data: userUpdate });

  }

  @del()
  @get('/del')
  async delUserAll(ctx: Context) {

    const userAll: [UserResult] = await this.userService.delUserAll();
    if(userAll){
      ctx.body = Object.assign({}, this.result.success, { data: userAll });
    }else{
      ctx.body = Object.assign({}, this.result.error, { data: userAll });
    }
    
  }

  @del('/:id')
  @get('/del/:id')
  async delUser(ctx: Context) {

    const id: number = ctx.params.id;
    const user: UserResult = await this.userService.delUser(id);
    if(user){
      ctx.body = Object.assign({}, this.result.success, { data: user });
    }else{
      ctx.body = Object.assign({}, this.result.error, { data: user });
    }

  }

  @get('/exam/:id')
  async userExam(ctx: Context) {
    const id: number = ctx.params.id;
    const userExam = await this.examService.getUserExam(id);
    ctx.body = Object.assign({}, this.result.success, { data: userExam });
  }
}
