'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;


  router.post('/login', controller.admin.login.index);
  router.resources('users', '/api/users', controller.admin.users);


};
