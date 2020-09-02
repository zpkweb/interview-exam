import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598260259692_4111';

  // add your config here
  config.middleware = [
  ];

  config.sequelize = {
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root1234',
    database: 'test',
    dialect: 'mysql',
    storage: ':memory:',
  };
  // config.mysql = {
  //   // database configuration
  //   client: {
  //     // host
  //     host: 'localhost',
  //     // port
  //     port: '3306',
  //     // username
  //     user: 'root',
  //     // password
  //     password: 'root1234',
  //     // database
  //     database: 'mysql',
  //   },
  //   // load into app, default is open
  //   app: true,
  // };

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: [ 'http://localhost:7001' ],
  };

  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH'
  };

  return config;
};
