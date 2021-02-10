"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seedDb = void 0;

var _faker = _interopRequireDefault(require("faker"));

var _path = require("path");

var _User = _interopRequireDefault(require("../models/User"));

var _Message = _interopRequireDefault(require("../models/Message"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const seedDb = async () => {
  console.log('Seeding database...');
  await _User.default.deleteMany({});
  await _Message.default.deleteMany({});
  await (0, _utils.deleteAllAvatars)((0, _path.join)(__dirname, '../..', process.env.IMAGES_FOLDER_PATH)); // create 3 users

  const usersPromises = [...Array(3).keys()].map((index, i) => {
    const user = new _User.default({
      provider: 'email',
      username: `user${index}`,
      email: `email${index}@email.com`,
      password: '123456789',
      name: _faker.default.name.findName(),
      // avatar: faker.image.avatar(),
      avatar: `avatar${index}.jpg`,
      bio: _faker.default.lorem.sentences(3)
    });

    if (index === 0) {
      user.role = 'ADMIN';
    }

    user.registerUser(user, () => {});
    return user;
  });
  await Promise.all(usersPromises.map(async user => {
    await user.save();
  }));
};

exports.seedDb = seedDb;
//# sourceMappingURL=seed.js.map