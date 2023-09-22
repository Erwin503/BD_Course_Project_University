import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const ReportInfo = observer(() => {
  const { student } = useContext(Context);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function groupName(studentGroupId) {
    const result = student.Groups.filter(
      (group) => group.Group_ID == studentGroupId
    );
    return result[0].Group_Name;
  }
  function facName(studentFacId) {
    const result = student.Faculties.filter(
      (faculty) => faculty.Faculty_ID == studentFacId
    );
    return result[0].Faculty_Name;
  }

  return (
    <>
      <Button variant={"primary"} className="mt-4 p-2" onClick={handleShow}>
        Отчет
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Отчеты</Modal.Title>
        </Modal.Header>
        <Row className="mt-2 row justify-content-center">
          <Col md={9}>
            <h2>Студенты</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Пол</th>
                  <th>Адрес</th>
                  <th>Email</th>
                  <th>Группа</th>
                </tr>
              </thead>
              <tbody>
                {student.Students.map((student_inline) => (
                  <tr key={student_inline.Student_ID}>
                    <td>{student_inline.Student_ID}</td>
                    <td>{student_inline.First_Name}</td>
                    <td>{student_inline.Last_Name}</td>
                    <td>{student_inline.Gender}</td>
                    <td>{student_inline.Adress}</td>
                    <td>{student_inline.Email}</td>
                    <td>{groupName(student_inline.GroupGroupID)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2>Преподаватели</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Пол</th>
                  <th>Адрес</th>
                  <th>Email</th>
                  <th>Факультет</th>
                </tr>
              </thead>
              <tbody>
                {student.Teachers.map((teacher_inline) => (
                  <tr key={teacher_inline.Teacher_ID}>
                    <td>{teacher_inline.Teacher_ID}</td>
                    <td>{teacher_inline.First_Name}</td>
                    <td>{teacher_inline.Last_Name}</td>
                    <td>{teacher_inline.Gender}</td>
                    <td>{teacher_inline.Adress}</td>
                    <td>{teacher_inline.Email}</td>
                    <td>{facName(teacher_inline.FacultyFacultyID)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* <h2>Курсы</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                </tr>
              </thead>
              <tbody>
                {student.Courses.map((course) => (
                  <tr key={course.Course_ID}>
                    <td>{course.Course_ID}</td>
                    <td>{course.Course_Name}</td>
                  </tr>
                ))}
              </tbody>
            </Table> */}
            <h2>Группы</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                </tr>
              </thead>
              <tbody>
                {student.Groups.map((group) => (
                  <tr key={group.Group_ID}>
                    <td>{group.Group_ID}</td>
                    <td>{group.Group_Name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2>Факультеты</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                  <th>Адрес</th>
                  <th>Имя декана</th>
                </tr>
              </thead>
              <tbody>
                {student.Faculties.map((faculty) => (
                  <tr key={faculty.Faculty_ID}>
                    <td>{faculty.Faculty_ID}</td>
                    <td>{faculty.Faculty_Name}</td>
                    <td>{faculty.Faculty_Adress}</td>
                    <td>{faculty.Faculty_Dekan_Name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Modal>
    </>
  );
});

export default ReportInfo;
