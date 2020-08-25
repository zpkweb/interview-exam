// import { DB } from './model/db';
import { Application } from 'midway';

export = (app: Application) => {

  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');

    // await DB.initDB(app.config.sequelize);

    console.log('✅  Your awesome APP launched');
  });
};




