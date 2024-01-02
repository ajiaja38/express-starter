const { Router } = require("express");

const router = Router();

const userRouter = require("./user.router");

router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.send({
    greeting: "Hello World 🚀",
  });
});

module.exports = router;
