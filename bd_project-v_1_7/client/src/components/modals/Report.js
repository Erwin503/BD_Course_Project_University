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
  const { food } = useContext(Context);
  const { student } = useContext(Context);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function catName(foodCatId) {
    const result = food.categories.filter((cat) => cat.id == foodCatId);
    return result[0].name;
  }

  function groupName(studentGroupId) {
    const result = student.Groups.filter(
      (group) => group.Group_ID == studentGroupId
    );
    return result[0].Group_Name;
  }

  function restName(foodRestId) {
    const result = food.restaurants.filter((rest) => rest.id == foodRestId);
    return result[0].name;
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
                  <th>Ресторан</th>
                  <th>Категория</th>
                  <th>Название</th>
                  <th>Описание</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{}</td>
                  {console.log(food.foods[0])}
                  {/* <td>{groupName(student.Students[0].GroupGroupID)}</td>
                  <td>{student.Students[0].Adress}</td>
                  <td>{student.Students[0].First_Name}</td>
                  <td>{student.Students[0].Last_Name}</td>
                  <td>{student.Students[0].Gender}</td> */}
                </tr>
                {/* {student.Students.map((student_inline) => (
                  <tr
                    key={student_inline.Student_ID}
                  >
                    {console.log(student_inline.Student_ID)}
                    <td>{student_inline.Student_ID}</td>
                    <td>{restName(student_inline.GroupGroupID)}</td>
                    <td>{catName(student_inline.Adress)}</td>
                    <td>{student_inline.First_Name}</td>
                    <td>{student_inline.Last_Name}</td>
                    <td>{student_inline.Gender}</td>
                    
                  </tr>
                ))} */}
                {/* {food.foods.map((food) => (
                  <tr
                    key={food.id}
                  >
                    <td>{food.id}</td>
                    <td>{restName(food.restaurantId)}</td>
                    <td>{catName(food.categoryId)}</td>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                    <td>{food.price}</td>
                    
                  </tr>
                ))} */}
              </tbody>
            </Table>
            <h2>Рестораны</h2>
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
            <h2>Категории блюд</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                </tr>
              </thead>
              <tbody>
                {food.categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
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
