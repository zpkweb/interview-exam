import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598260259692_4111';

  // add your config here
  config.middleware = [
  ];

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

//   config.orm = {
//     type: 'mysql',
//     host: '',
//     port: 3306,
//     username: '',
//     password: '',
//     database: test,
//     synchronize: true,
//     logging: false,
//  }

  // 请求返回结果
  config.result = {
    success : {
      success: true,
      message: 'OK',
      data: []
    },
    error : {
      success: false,
      message: 'error',
      data: []
    }
  };


  return config;
};
