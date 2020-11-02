import { provide } from 'midway';
import { getRepository } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { TagEntity } from '../../tag/tag.entity';

@provide('adminService')
export class AdminService {
  getAdmin(payload) {
    return getRepository(AdminEntity).findOne(payload, {relations: ['tag']});
  }

  async getAdminType(payload) {
    // return getRepository(AdminEntity).find({type: payload});
    return getRepository(AdminEntity)
      .createQueryBuilder("admin")
      .leftJoinAndSelect("admin.tag", "tag")
      .where("admin.type = :type", { type: payload })
      .getMany();
  }

  async createTag(payload) {
    const tagNew = new TagEntity();
    tagNew.title = payload.title;
    tagNew.admin = payload.adminId;

    const tagEntity = getRepository(TagEntity);
    await tagEntity.save(tagNew);
    return tagEntity.findOne(tagNew.id);
  }
}
