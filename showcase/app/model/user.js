'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: {
      unique: true,
      type: String,
    },
    password: {
      type: String,
    },

    padd: {
      default: 1,
    },

  }, {
    collection: 'users',
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
