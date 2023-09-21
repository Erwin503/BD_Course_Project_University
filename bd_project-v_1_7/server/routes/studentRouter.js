const Router = require("express");
const router = new Router();
const studentController = require("../controllers/studentController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.delete("/", studentController.deleteItem);
router.post("/", studentController.create);
router.get("/", studentController.getAll);


module.exports = router;
