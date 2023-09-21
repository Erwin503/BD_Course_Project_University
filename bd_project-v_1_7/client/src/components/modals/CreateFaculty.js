import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../index";
import { Dropdown, Form } from "react-bootstrap";
import { createFaculty } from "../../http/StudentAPI";
import { observer } from "mobx-react-lite";

const CreateFaculty = observer(() => {
  const { student } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Faculty_Name, setFaculty_Name] = useState("");
  const [Faculty_Adress, setFaculty_Adress] = useState("");
  const [Faculty_Dekan_Name, setFaculty_Dekan_Name] = useState("");

  const addFaculty = () => {
    const formData = new FormData();
    formData.append("Faculty_Name", Faculty_Name);
    formData.append("Faculty_Adress", Faculty_Adress);
    formData.append("Faculty_Dekan_Name", Faculty_Dekan_Name);
    createFaculty(formData).then((data) => handleClose());
  };

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Добавить факультет
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Новый факультет</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={Faculty_Name }
              onChange={(e) => setFaculty_Name(e.target.value)}
              className="mt-3"
              placeholder="Введите название"
            />
            <Form.Control
              value={Faculty_Adress}
              onChange={(e) => setFaculty_Adress(e.target.value)}
              className="mt-3"
              placeholder="Введите адрес"
            />
            <Form.Control
              value={Faculty_Dekan_Name}
              onChange={(e) => setFaculty_Dekan_Name(e.target.value)}
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите имя декана"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-success"} onClick={addFaculty}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CreateFaculty;
