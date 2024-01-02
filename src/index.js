const express = require("express");
const cors = require("cors");
const router = require("./routes");
const responseInterceptor = require("./middleware/interceptors");
const catchEverythings = require("./middleware/catchEverythings");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(responseInterceptor);
app.use("/v1", router);
app.use(catchEverythings);

app.listen(port, () => {
  console.log(`🚀 Application is running in port http://localhost:${port}/v1`);
});
