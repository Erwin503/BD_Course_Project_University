const express = require("express");
const router = express.Router();
const groupController = require('../controllers/groupController')

const {
  create,
  getAll,
  getOne,
  deleteItem,
  updateItem,
} = require("../controllers/groupController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", create);
router.get("/:Group_ID", getOne);
router.get("/", getAll);
router.delete("/", deleteItem);
router.put("/:Group_ID", updateItem);

module.exports = router;
// , checkRole("ADMIN")
