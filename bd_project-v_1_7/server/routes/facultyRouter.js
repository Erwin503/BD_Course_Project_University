const express = require("express");
const router = express.Router();

const {
  create,
  getAll,
  getOne,
  deleteItem,
  updateItem,
} = require("../controllers/facultyController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", create);
router.get("/:Faculty_ID", getOne);
router.get("/", getAll);
router.delete("/", deleteItem);
router.put("/:Faculty_ID", updateItem);

module.exports = router;
// , checkRole("ADMIN")