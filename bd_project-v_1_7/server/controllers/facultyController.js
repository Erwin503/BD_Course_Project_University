const { Faculty } = require("../models/models");
const { badRequest } = "../error/ApiError";

class FacultyController {
  async create(req, res, next) {
    try {
      let { Faculty_Name, Faculty_Adress, Faculty_Dekan_Name } = req.body;

      const faculty = await Faculty.create({
        Faculty_Name,
        Faculty_Adress,
        Faculty_Dekan_Name,
      });

      return res.json(faculty);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const faculties = await Faculty.findAll();
    return res.json(faculties);
  }

  async getOne(req, res) {
    const { Faculty_ID } = req.params;
    const faculty = await Faculty.findOne({
      where: {
        Faculty_ID,
      },
    });
    return res.json(faculty);
  }

  async deleteItem(req, res) {
    const { Faculty_Name } = req.body;

    try {
      // Найти категорию для удаления
      const faculty = await Faculty.findOne({ where: { Faculty_Name } });

      if (!faculty) {
        return res.status(404).json({ error: "Факультет не найден" });
      }
      await Faculty.destroy({ where: { Faculty_Name: faculty.Faculty_Name } });

      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  async updateItem(req, res, next) {
    try {
      let { Faculty_ID, Faculty_Name, Faculty_Adress, Faculty_Dekan_Name } =
        req.body;

      const [updated] = await Group.update(
        {
          Faculty_Name,
          Faculty_Adress,
          Faculty_Dekan_Name,
        },
        {
          where: {
            Faculty_ID,
          },
        }
      );

      if (updated === 0) {
        return res.status(404).send({ error: "Faculty not found" });
      }

      return res.json(updated);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new FacultyController();
