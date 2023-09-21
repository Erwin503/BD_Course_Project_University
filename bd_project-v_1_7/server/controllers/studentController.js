const ApiError = require("../error/ApiError");
const { Student } = require("../models/models");

class StudentController {
  async create(req, res, next) {
    try {
      let {
        First_Name,
        Last_Name,
        Phone_Number,
        Gender,
        Adress,
        Email,
        GroupGroupID,
      } = req.body;

      const student = await Student.create({
        First_Name,
        Last_Name,
        Phone_Number,
        Gender,
        Adress,
        Email,
        GroupGroupID,
      });

      console.log("Student created");
      return res.json(student);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    const student = await Student.findOne({
      where: {
        id,
      },
    });
    if (!student) {
      return res.json({
        Adress: "Не найден",
        First_Name: "Не найден",
        Last_Name: "Не найден",
        Phone_Number: "отсутсвует",
        Date_Of_Birth: "отсутсвует",
        Gender: "отсутсвует",
      });
    }
    return res.json(student);
  }

  async getAll(req, res) {
    let { Group_ID, limit, page } = req.query;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    let students;
    if (!Group_ID) {
      students = await Student.findAndCountAll({ limit, offset });
    } else {
      students = await Student.findAndCountAll({
        where: { Group_ID },
        limit,
        offset,
      });
    }
    return res.json(students);
  }

  async deleteItem(req, res) {
    const { Student_ID } = req.params;
    const student = await Student.destroy({
      where: {
        Student_ID,
      },
    });
    return res.json(student);
  }
}

module.exports = new StudentController();
