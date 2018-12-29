'use strict';

const BaseController = require('../base');

class LoginController extends BaseController {
  async index() {
    const {
      ctx,
    } = this;

    const payload = ctx.request.body;

    // this.ctx.params;
    const res = ctx.model.User.find({
      userName: payload.userName,
    });

    console.log(res);

    if (!res) {
      ctx.throw(10001, '用户不存在');
    }


    ctx.helper.success({
      ctx,
      res: payload,
    });

  }
}

module.exports = LoginController;
