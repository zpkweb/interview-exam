import { Application } from 'midway';
// import { DB } from './model/db';

import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
// import { Photo } from './model/Photo';
// import { PhotoMetadata } from './model/PhotoMetadata';

import { UserEntity } from './app/modules/people/user/user.entity';
import { UserInfoEntity } from './app/modules/people/user/user-info.entity';

import { ExamEntity } from './app/modules/exam/exam.entity';

import { QuestionEntity } from './app/modules/question/question.entity';

import { SuperAdminEntity } from './app/modules/people/superadmin/superadmin.entity';

import { AdminEntity } from './app/modules/people/admin/admin.entity';

import { TagEntity } from './app/modules/tag/tag.entity';

export = (app: Application) => {

  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');
    const connectionOptions = await getConnectionOptions();
    // Object.assign(connectionOptions, { entities: [Photo, PhotoMetadata] });
    Object.assign(connectionOptions, { entities: [
      UserEntity, 
      UserInfoEntity, 
      ExamEntity, 
      QuestionEntity,
      SuperAdminEntity,
      AdminEntity,
      TagEntity
    ] });
    // Object.assign(connectionOptions, { entities: [__dirname + 'modules/**/**/**.entity.ts'] });

    // const connection: Connection = await createConnection(connectionOptions);
    createConnection(connectionOptions);

    console.log('Photo is saved, photo metadata is saved too.');
    // .then(async connection => {

    // }).catch(error => console.log(error));

    console.log('✅  Your awesome APP launched');
  });
};






