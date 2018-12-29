'use strict';

const BaseController = require('../base');

class LoginController extends BaseController {
  async index() {
    const {
      ctx,
    } = this;

    const payload = ctx.request.body;

    // this.ctx.params;
    const res = await ctx.model.User.find({
      userName: payload.userName,
    });


    if (!res || res.length === 0) {
      ctx.throw(404, '用户不存在');
    }


    ctx.helper.success({
      ctx,
      res,
    });

  }
}

module.exports = LoginController;
