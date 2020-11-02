import { provide } from 'midway';
import { getRepository } from 'typeorm';
import { TagEntity } from './tag.entity';

@provide('tagService')
export class TagService {

  getTagAll() {
    return getRepository(TagEntity).find();
  }
  
  getTag(tagId) {
    return getRepository(TagEntity).findOne(tagId, {relations: ['admin']});
  }
  
  async removeTag(tagId) {
    const tag = await getRepository(TagEntity).findOne(tagId);
    return getRepository(TagEntity).remove(tag)

  }
}
