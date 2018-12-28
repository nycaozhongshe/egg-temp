'use strict';

const BaseController = require('../base');

class UserController extends BaseController {

  // 获取列表
  async index() {


    const {
      ctx,
    } = this;

    ctx.helper.success({
      ctx,
      res: '可',
    });

  }
  // 根据id获取
  async show() {

  }
  // 创建
  async create() {


    const {
      ctx,
    } = this;

    const payload = ctx.request.body;

    const user = new ctx.model.User(payload);

    const result = await user.save();

    ctx.helper.success({
      ctx,
      result,
    });
  }
  // 编辑
  async update() {

  }
  // 删除
  async destroy() {

  }

}

module.exports = UserController;
