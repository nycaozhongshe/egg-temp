'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: {
      type: String,
      dropDups: true,
      unique: true,
    },
    password: {
      type: String,
    },
    moblie: {
      type: String,
    },
    email: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
    roleId: {
      type: Schema.Types.ObjectId,
    },
    isSuper: {
      type: Number,
      default: 0,
    },
  }, {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  });

  UserSchema.pre('save', function(next) {
    // let user = this
    console.log(this);
    next();
  });


  UserSchema.methods = {
    // 密码比对的方法
    comparePassword: (_password, password) => {
      console.log(_password, password);
    },
  };

  return mongoose.model('User', UserSchema);
};
