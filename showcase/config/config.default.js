'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545804008366_4876';

  // add your config here
  config.middleware = [ 'errorHandler' ];


  //
  // 'mongodb://root:czs41ML88@47.96.110.4:27017/test'
  //
  // 'handleError'

  exports.mongoose = {
    client: {
      url: 'mongodb://47.96.110.4/test',
      options: {},
    },
  };


  config.security = {
    csrf: {
      enable: false,
    },
    // domainWhiteList: [ 'http://localhost:7001/' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  return config;
};
