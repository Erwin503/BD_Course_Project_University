import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteGroup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState("");

  const delGroup = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}api/group`,
        {
          data: { Group_Name: value },
        }
      );

      const deletedGroupId = result.data.Group_ID;

      await axios.delete(`${process.env.REACT_APP_API_URL}api/student/`, {
        data: { GroupGroupID: deletedGroupId },
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
        Удалить Группу
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Группа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value || ""}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите название группы"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-dark"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button href="/admin" variant={"outline-danger"} onClick={delGroup}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteGroup;
