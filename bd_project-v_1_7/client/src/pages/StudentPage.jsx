import { useEffect, useState } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchStudents, fetchOneStudent } from "../http/StudentAPI";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";

const StudentPage = observer(() => {
  const [Student, setStudent] = useState({ info: [] });
  const { Student_ID } = useParams();
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  useEffect(() => {
    fetchOneStudent(Student_ID).then((Student) => setStudent(Student));
    fetchStudents(Student_ID);
  }, [Student_ID]);

  return (
    <Container className="mt-4">
      <h1>Карточка Студента</h1>

      <Row style={{ marginTop: "30px" }}>
        {/* // Колонка с информацией */}
        <Col sm={9}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              height: "100%",
              fontSize: 32,
              border: "0px solid lightgray",
            }}
          >
            <h2>{Student.First_Name + Student.Last_Name}</h2>
            <h3>Родился {Student.Date_Of_Birth}, {Student.Gender}, {Student.Adress}, {Student.Email}</h3>
            <p style={{ fontSize: "1.1rem" }}>{Student.description}</p>
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
});

export { StudentPage };
