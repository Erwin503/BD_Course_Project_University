import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupBar from "../components/GroupBar";
import FacultyBar from "../components/FacultyBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../index";
import { fetchGroupes, fetchStudents, fetchFaculties } from "../http/StudentAPI";

const Service = observer(() => {
  const { student } = useContext(Context);

  useEffect(() => {
    fetchGroupes().then((data) => student.setGroups(data));
    fetchFaculties().then((data) => student.setFaculties(data));
  }, [student]);

  useEffect(() => {
    fetchStudents(student.selectedGroup.id, student.page, 1000).then((data) => {
      student.setStudents(data.rows);
      student.setTotalCount(data.count);});
  }, [student.page, student.selectedGroup, student.selectedFaculty, student]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={5}>
          <GroupBar />
        </Col>
        <Col md={5    }>
          <FacultyBar />
        </Col>
      </Row>
    </Container>
  );
});
export { Service };
