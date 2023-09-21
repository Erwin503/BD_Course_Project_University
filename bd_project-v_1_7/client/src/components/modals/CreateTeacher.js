import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../index";
import { Dropdown, Form } from "react-bootstrap";
import {
  fetchFaculties,
  fetchTeachers,
  createTeacher,
} from "../../http/StudentAPI";
import { observer } from "mobx-react-lite";

const CreateTeacherModal = observer(() => {
  const { student } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Gender, setGender] = useState("");
  const [Adress, setAdress] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setPhone_Number] = useState("");

  useEffect(() => {
    fetchFaculties().then((data) => student.setFaculties(data));
    fetchTeachers().then((data) => student.setTeachers(data.rows));
  }, [student]);

  const addTeacher = () => {
    const formData = new FormData();
    formData.append("First_Name", First_Name);
    formData.append("Last_Name", Last_Name);
    formData.append("Gender", Gender);
    formData.append("Adress", Adress);
    formData.append("Email", Email);
    formData.append("Phone_Number", Phone_Number);
    formData.append("FacultyFacultyID", student.selectedFaculty.Faculty_ID);
    createTeacher(formData).then((data) => handleClose());
  };

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Добавить преподавателя
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Новый преподаватель</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>
                {student.selectedFaculty.Faculty_Name || "Выберете факультет"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {student.Faculties.map((faculty) => (
                  <Dropdown.Item
                    onClick={() => student.setSelectedFaculty(faculty)}
                    key={faculty.Faculty_ID}
                  >
                    {faculty.Faculty_Name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              value={First_Name}
              onChange={(e) => setFirst_Name(e.target.value)}
              className="mt-3"
              placeholder="Введите имя"
            />
            <Form.Control
              value={Last_Name}
              onChange={(e) => setLast_Name(e.target.value)}
              className="mt-3"
              placeholder="Введите Фамилию"
            />
            <Form.Control
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите пол"
            />
            <Form.Control
              value={Adress}
              onChange={(e) => setAdress(e.target.value)}
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите адрес"
            />
            <Form.Control
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите электронную почту"
            />
            <Form.Control
              value={Phone_Number}
              onChange={(e) => setPhone_Number(e.target.value)}
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите номер телефона"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-success"} onClick={addTeacher}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CreateTeacherModal;
