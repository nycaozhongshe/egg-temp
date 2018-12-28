'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  constructor(ctx) {
    super(ctx);

    this.a = '1';
  }
  async index() {
    const user = new this.ctx.model.User({
      userName: 'caozhongshe',
      password: '123456',
    });

    const result = await user.save();

    this.ctx.body = result;
  }
}

module.exports = HomeController;
