const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER",
  },
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  num_tel: {
    type: DataTypes.STRING,
  },
});

const Student = sequelize.define("Student", {
  Student_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  First_Name: { type: DataTypes.STRING },
  Last_Name: { type: DataTypes.STRING },
  Gender: { type: DataTypes.STRING },
  Adress: { type: DataTypes.STRING },
  Email: { type: DataTypes.STRING, unique: true },
  Phone_Number: { type: DataTypes.STRING },
});
const Teacher = sequelize.define("Teacher", {
  Teacher_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  First_Name: { type: DataTypes.STRING },
  Last_Name: { type: DataTypes.STRING },
  Gender: { type: DataTypes.STRING },
  Adress: { type: DataTypes.STRING },
  Email: { type: DataTypes.STRING, unique: true },
  Phone_Number: { type: DataTypes.STRING },
});
const Course = sequelize.define("Course", {
  Course_ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Course_Name: { type: DataTypes.STRING, unique: true },
  // Description: { type: DataTypes.STRING },
  // Hours: { type: DataTypes.INTEGER },
});
const Faculty = sequelize.define("Faculty", {
  Faculty_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Faculty_Name: { type: DataTypes.STRING },
  Faculty_Adress: { type: DataTypes.STRING },
  Faculty_Dekan_Name: { type: DataTypes.STRING },
});
const Group = sequelize.define("Group", {
  Group_ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Group_Name: { type: DataTypes.STRING, unique: true },
});

Student.belongsTo(Group);

Teacher.belongsTo(Faculty);

// Course.belongsTo(Faculty);

Faculty.hasMany(Teacher);

Group.hasMany(Student);
// Group.belongsTo(Course);

module.exports = {
  User,
  Student,
  Teacher,
  Course,
  Faculty,
  Group,
};
