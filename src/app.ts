import { Application } from 'midway';
// import { DB } from './model/db';

import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Photo } from './model/Photo';
import { PhotoMetadata } from './model/PhotoMetadata';

export = (app: Application) => {

  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');
    const connectionOptions = await getConnectionOptions();
    Object.assign(connectionOptions, { entities: [Photo] });

    createConnection(connectionOptions)
    .then(async connection => {
      const photo = new Photo();
      photo.name = 'Me and Bears';
      photo.description = 'I am near polar bears';
      photo.filename = 'photo-with-bears.jpg';
      photo.views = 1;
      photo.isPublished = true;

      // 创建 photo metadata 对象
      const metadata = new PhotoMetadata();
      metadata.height = 640;
      metadata.width = 480;
      metadata.compressed = true;
      metadata.comment = 'cybershoot';
      metadata.orientation = 'portait';

      // 获取 repository
      const photoRepository = connection.getRepository(Photo);
      // 保存photo的同时保存metadata
      await photoRepository.save(photo);
      console.log('Photo is saved, photo metadata is saved too.');

    }).catch(error => console.log(error));

    console.log('✅  Your awesome APP launched');
  });
};






