const express = require("express");
const router = express.Router();

const {
  create,
  getAll,
  getOne,
  deleteItem,
  updateItem,
} = require("../controllers/courseController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", create);
router.get("/", getAll);
router.get("/:Course_ID", getOne);
router.delete("/:Course_ID", checkRole("ADMIN"), deleteItem);
router.put("/:Course_ID", updateItem);

module.exports = router;
// , checkRole("ADMIN")