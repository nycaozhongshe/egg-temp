'use strict';

const BaseController = require('../base');

class LoginController extends BaseController {
  async index() {
    const {
      ctx,
    } = this;

    const payload = ctx.request.body;

    // this.ctx.params;


    ctx.helper.success({
      ctx,
      res: payload,
    });

  }
}

module.exports = LoginController;
