const NotFoundException = require("../error/NotFoundException");

class UsersServices {
  constructor() {}

  getAllUsers() {
    const data = [];

    if (!data.length) {
      throw new NotFoundException("Belum ada user yang terdaftar");
    }

    return data;
  }

  getById(id) {
    return {
      id,
      name: "M. Aji Perdana",
      age: 22,
    };
  }
}

module.exports = UsersServices;
