'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {


  async index1() {

    return 'index';
  }
}

module.exports = BaseController;
