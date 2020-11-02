import { provide } from 'midway';
import { getRepository } from 'typeorm';
// import { } from '../interface/photo';
import { Photo } from '../model/Photo';
import { PhotoMetadata } from '../model/PhotoMetadata';

@provide('photoService')
export class PhotoService {

  async setPhoto(options) {
    console.log('-------------------------');
    console.log(options);
    console.log('-------------------------');

    const photo = new Photo();
    photo.name = options.name || '';
    photo.description = options.description || '';
    photo.filename = options.filename || '';
    photo.views = options.views || 0;
    photo.isPublished = options.isPublished || false;

    // 创建 photo metadata 对象
    const metadata = new PhotoMetadata();
    metadata.height = options.height || 0;
    metadata.width = options.width || 0;
    metadata.compressed = options.compressed || false;
    metadata.comment = options.comment || '';
    metadata.orientation = options.orientation || '';
    // metadata.photo = photo; // 这里把两者连起来

    photo.metadata = metadata;

    // await metadataRepository.save(metadata);

    // 获取 repository
    const photoRepository = getRepository(Photo);
    // const metadataRepository = connection.getRepository(PhotoMetadata);
    // 保存photo的同时保存metadata
    await photoRepository.save(photo);
    return photoRepository.findOne(photo.id);

  }

  getPhotoAll() {
    // const photos = await getManager().find({ relations: ['metadata'] });
    // return getManager().find(Photo);
    return getRepository(Photo).find({relations: ['metadata'] });
  }
  getPhoto(id: number) {
    // return getRepository(Photo).findOne(id);
    return getRepository(Photo).findOne(id, {relations: ['metadata'] });
  }

  async delPhoto(id) {
    const photo = await getRepository(Photo).findOne(id, {relations: ['metadata'] });
    return getRepository(Photo).remove(photo);
  }
}
