import { makeAutoObservable } from "mobx";

export default class StudentStore {
  constructor() {
    this._Faculties = [];
    this._Courses = [];
    this._Groups = [];
    this._Students = [];
    this._Teachers = [];
    this._selectedGroup = [];
    this._selectedCourse = [];
    this._selectedFaculty = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setFaculties(Faculties) {
    this._Faculties = Faculties;
  }
  setCourses(Courses) {
    this._Courses = Courses;
  }
  setGroups(Groups) {
    this._Groups = Groups;
  }
  setStudents(Students) {
    this._Students = Students;
  }
  setTeachers(Teachers) {
    this._Teachers = Teachers;
  }

  setSelectedGroup(Group) {
    this.setPage(1);
    this._selectedGroup = Group;
  }
  setSelectedCourse(Course) {
    this.setPage(1);
    this._selectedCourse = Course;
  }
  setSelectedFaculty(Faculty) {
    this.setPage(1);
    this._selectedFaculty = Faculty;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get Faculties() {
    return this._Faculties;
  }
  get Courses() {
    return this._Courses;
  }
  get Groups() {
    return this._Groups;
  }
  get Students() {
    return this._Students;
  }
  get Teachers() {
    return this._Teachers;
  }
  get selectedFaculty() {
    return this._selectedFaculty;
  }
  get selectedCourse() {
    return this._selectedCourse;
  }
  get selectedGroup() {
    return this._selectedGroup;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
