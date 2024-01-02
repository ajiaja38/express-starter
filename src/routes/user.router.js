const { Router } = require("express");
const userController = require("../controller/user.controller");

const router = Router();

router.get("/all", (req, res) => userController.getAllUsers(req, res));
router.get("/detail/:id", (req, res) =>
  userController.getByIdHandler(req, res)
);

module.exports = router;
