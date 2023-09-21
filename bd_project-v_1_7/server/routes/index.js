const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const courseRouter = require("./courseRouter");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");
const facultyRouter = require("./facultyRouter");
const groupRouter = require("./groupRouter");

router.use("/user", userRouter);
router.use("/student", studentRouter);
router.use("/course", courseRouter);
router.use("/teacher", teacherRouter);
router.use("/faculty", facultyRouter);
router.use("/group", groupRouter);

module.exports = router;
