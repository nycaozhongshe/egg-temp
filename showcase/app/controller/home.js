'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const user = new this.ctx.model.User({
      userName: '李四',
      password: '123456',

    });

    const result = await user.save();
    this.ctx.body = result;
  }
}

module.exports = HomeController;
