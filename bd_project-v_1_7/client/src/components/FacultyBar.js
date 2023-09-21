import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Card, Row, Col } from "react-bootstrap";

const FacultyBar = observer(() => {
  const { student } = useContext(Context);
  return (
    <Row>
      <h4>Факультет</h4>
      {student.Faculties.map((faculty) => (
        <Col xs={3} key={faculty.Faculty_ID}>
          <Card
            style={{ textAlign: "center", margin: "2px" }}
            className="p-2"
            onClick={() => student.setSelectedGroup(faculty)}
            border={
              faculty.Faculty_ID === student.selectedFaculty.Faculty_ID
                ? "primary"
                : "light"
            } 
          >
            {faculty.Faculty_Name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default FacultyBar;
