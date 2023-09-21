import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../index";
import { Dropdown, Form } from "react-bootstrap";
import {
  fetchGroupes,
  fetchStudents,
  createStudent,
} from "../../http/StudentAPI";
import { observer } from "mobx-react-lite";

const CreateStudentModal = observer(() => {
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
    fetchGroupes().then((data) => student.setGroups(data));
    fetchStudents().then((data) => student.setStudents(data.rows));
  }, [student]);

  const addStudent = () => {
    const formData = new FormData();
    formData.append("First_Name", First_Name);
    formData.append("Last_Name", Last_Name);
    formData.append("Gender", Gender);
    formData.append("Adress", Adress);
    formData.append("Email", Email);
    formData.append("Phone_Number", Phone_Number);
    formData.append("GroupGroupID", student.selectedGroup.Group_ID);
    createStudent(formData).then((data) => handleClose());
  };

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Добавить Студента
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Новый студент</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>
                {student.selectedGroup.Group_Name || "Выберете группу"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {student.Groups.map((group) => (
                  <Dropdown.Item
                    onClick={() => {
                      student.setSelectedGroup(group);
                      console.log(student.selectedGroup.Group_ID);
                    }}
                    key={group.Group_ID}
                  >
                    {group.Group_Name}
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
          <Button variant={"outline-success"} onClick={addStudent}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CreateStudentModal;
