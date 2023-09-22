const { Group } = require("../models/models");
const { badRequest } = "../error/ApiError";

class GroupController {
  async create(req, res, next) {
    try {
      let { Group_Name } = req.body;

      const group = await Group.create({Group_Name});

      return res.json(group);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const groups = await Group.findAll();
    return res.json(groups);
  }

  async getOne(req, res) {
    const { Group_ID } = req.params;
    const group = await Group.findOne({
      where: {
        Group_ID,
      },
    });
    return res.json(group);
  }

  async deleteItem(req, res) {
    const { Group_Name } = req.body;

    try {
      const group = await Group.findOne({ where: { Group_Name } });

      if (!group) {
        return res.status(404).json({ error: "Группа не найден" });
      }
      await Group.destroy({ where: { Group_Name: group.Group_Name } });

      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  }


  async updateItem(req, res, next) {
    try {
      let { Group_ID, Group_Name } = req.body;

      const [updated] = await Group.update(
        {
          Group_Name,
        },
        {
          where: {
            Group_ID,
          },
        }
      );

      if (updated === 0) {
        return res.status(404).send({ error: "Group not found" });
      }

      return res.json(updated);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new GroupController();
