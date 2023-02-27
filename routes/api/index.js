const admin = require("./admin");
const auth = require("./auth");
function router(app) {
  app.use("/api/admin", admin);
  app.use("/api/auth", auth);
}

module.exports = router;
