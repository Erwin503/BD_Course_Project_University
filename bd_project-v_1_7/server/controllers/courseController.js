const { Course } = require("../models/models");
const { badRequest } = "../error/ApiError";

class CourseController {
  async create(req, res, next) {
    try {
      let { Course_Name } = req.body;

      const course = await Course.create({
        Course_Name,
        // Description,
        // Hours,
      });

      return res.json(course);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const courses = await Course.findAll();
    return res.json(courses);
  }

  async getOne(req, res) {
    const { Course_ID } = req.params;
    const course = await Course.findOne({
      where: {
        Course_ID,
      },
    });
    return res.json(course);
  }

  async deleteItem(req, res) {
    const { Course_ID } = req.params;
    const course = await Course.destroy({
      where: {
        Course_ID,
      },
    });
    return res.json(course);
  }

  async updateItem(req, res, next) {
    try {
      let { Course_ID, Course_Name, Hours, Description } = req.body;

      const [updated] = await Course.update(
        {
          Course_Name,
          // Hours,
          // Description,
        },
        {
          where: {
            Course_ID,
          },
        }
      );

      if (updated === 0) {
        return res.status(404).send({ error: "Course not found" });
      }

      return res.json(updated);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new CourseController();
