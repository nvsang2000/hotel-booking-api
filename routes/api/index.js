const admin = require("./admin");
const auth = require("./auth");
const category = require("./category");
function router(app) {
  app.use("/api/admin", admin);
  app.use("/api/auth", auth);
  app.use("/api/category",category);
}

module.exports = router;
