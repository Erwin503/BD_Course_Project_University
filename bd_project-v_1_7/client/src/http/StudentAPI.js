import { $authHost, $host } from "./index";

export const createFaculty = async (faculty) => {
  const { data } = await $authHost.post("/api/faculty", faculty);
  return data;
};

export const fetchFaculties = async () => {
  const { data } = await $host.get("/api/faculty");
  return data;
};

export const createCourse = async (course) => {
  const { data } = await $authHost.post("/api/course", course);
  return data;
};

export const fetchCourses = async () => {
  const { data } = await $host.get("/api/course");
  return data;
};
export const createGroup = async (group) => {
  const { data } = await $authHost.post("/api/group", group);
  return data;
};

export const fetchGroupes = async () => {
  const { data } = await $host.get("/api/group");
  return data;
};

export const createStudent = async (student) => {
  const { data } = await $authHost.post("/api/student", student);
  return data;
};

export const fetchStudents = async (Group_ID, page, limit = 5) => {
  const { data } = await $host.get("api/food", {
    params: {
      Group_ID,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneStudent = async (Student_ID) => {
  const { data } = await $host.get("/api/student/" + Student_ID);
  return data;
};

export const createTeacher = async (teacher) => {
  const { data } = await $authHost.post("/api/teacher", teacher);
  return data;
};

export const fetchTeachers = async (Faculty_ID, page, limit = 5) => {
  const { data } = await $host.get("api/teacher", {
    params: {
      Faculty_ID,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneTeacher = async (Teacher_ID) => {
  const { data } = await $host.get("/api/teacher/" + Teacher_ID);
  return data;
};
