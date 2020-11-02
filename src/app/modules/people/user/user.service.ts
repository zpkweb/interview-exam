import { provide } from 'midway';
import { getRepository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserInfoEntity } from './user-info.entity';
import { UserRequest } from './user.interface';

@provide('userService')
export class UserService {

  async createUser(options: UserRequest) {
  
    const userEntity = new UserEntity();
    userEntity.username = options.username;
    userEntity.phone = options.phone;

    const userInfo = new UserInfoEntity();
    userInfo.age = options.age;
    userInfo.sex = options.sex;

    userEntity.userinfo = userInfo;

    const userRepository = getRepository(UserEntity);
    await userRepository.save(userEntity);
    return userRepository.findOne(userEntity.id, {relations: ['userinfo']});
  
  }

  async getUserAll() {
  
    return getRepository(UserEntity).find({relations: ['userinfo']});
  
  }

  async getUser(id: number) {
    
    return await getRepository(UserEntity).findOne(id, {relations: ['userinfo']});

  }

  async updateUser(options: UserRequest) {
    
    const userEntity = getRepository(UserEntity);
    let user = await userEntity.findOne(options.id, {relations: ['userinfo']});
    user.username = options.username;
    user.phone = options.phone;
    
    user.userinfo.age = options.age;
    user.userinfo.sex = options.sex;
    await userEntity.save(user);

    
    return userEntity.findOne(options.id, {relations: ['userinfo']});
  }

  async delUserAll() {

    return getRepository(UserEntity).clear();

  }

  async delUser(id: number) {

    const user = await getRepository(UserEntity).findOne(id, {relations: ['userinfo'] });
    if(user){
      return getRepository(UserEntity).remove(user)
    }else{
      return null;
    }

  }
}
