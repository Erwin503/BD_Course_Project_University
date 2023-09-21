import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteFaculty() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState("");

  const delFaculty = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}api/faculty`,
        {
          data: { Faculty_Name: value },
        }
      );

      const deletedFacultyId = result.data.Faculty_ID;
      await axios.delete(`${process.env.REACT_APP_API_URL}api/teacher/`, {
        data: { FacultyFacultyID: deletedFacultyId },
      });

      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant={"outline-danger"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Удалить Факультет
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Факультет</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value || ""}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите название факультета"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-dark"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button href="/admin" variant={"outline-danger"} onClick={delFaculty}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteFaculty;
