const ApiError = require("../error/ApiError");
const { Teacher } = require("../models/models");

class TeacherController {
  async create(req, res, next) {
    try {
      let {
        First_Name,
        Last_Name,
        Phone_Number,
        Date_Of_Birth,
        Gender,
        Adress,
        Email,
        FacultyFacultyID,
      } = req.body;

      const teacher = await Teacher.create({
        First_Name,
        Last_Name,
        Phone_Number,
        Date_Of_Birth,
        Gender,
        Adress,
        Email,
        FacultyFacultyID,
      });

      console.log("Teacher created");
      return res.json(teacher);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    const teacher = await Teacher.findOne({
      where: {
        id,
      },
    });
    if (!teacher) {
      return res.json({
        Adress: "Не найден",
        First_Name: "Не найден",
        Last_Name: "Не найден",
        Phone_Number: "отсутсвует",
        Date_Of_Birth: "отсутсвует",
        Gender: "отсутсвует",
        Email: "отсутсвует",
      });
    }
    return res.json(teacher);
  }

  async getAll(req, res) {
    let { Faculty_ID, limit, page } = req.query;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    let teachers;
    if (!Faculty_ID) {
      teachers = await Teacher.findAndCountAll({ limit, offset });
    } else {
      teachers = await Teacher.findAndCountAll({
        where: { Faculty_ID },
        limit,
        offset,
      });
    }
    return res.json(teachers);
  }

  async deleteItem(req, res, next) {
    try {
      const { Teacher_ID } = req.body;
      const result = await Teacher.destroy({
        where: {
          Teacher_ID,
        },
      });
      if (result) {
        res.json({
          result,
        });
      } else {
        return next(ApiError.badRequest("Объекта с таким не сущесвует"));
      }
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new TeacherController();
