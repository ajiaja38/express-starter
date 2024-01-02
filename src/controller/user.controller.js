const UsersServices = require("../services/user.service");
const UserValidator = require("../validation/users");

class UsersController {
  constructor() {
    this.services = new UsersServices();
    this.validators = UserValidator;
  }

  createUsers(req, res) {
    this.validators.validateCreateUser(req.body);
  }

  getAllUsers(req, res) {
    const data = this.services.getAllUsers();
    res.status(200).json("Berhasil mendapatkan seluruh user", data);
  }

  getByIdHandler(req, res) {
    const { id } = req.params;
    const data = this.services.getById(id);
    res.status(200).json(`berhasil mendapatkan data ${data.name}`, data);
  }
}

module.exports = new UsersController();
