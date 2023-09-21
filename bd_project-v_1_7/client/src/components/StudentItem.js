import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentItem = ({ student, GroupName }) => {

  return (
    <Col md={2} className={"mt-3"} style={{ margin: "0 12px" }}>
      <Link to={`/food/${student.id}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: 180, cursor: "pointer" }} border={"light"}>
          <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
            <div>{GroupName}</div>
          </div>
          <div>{student.First_Name} </div>
        </Card>
      </Link>
    </Col>
  );
};

export default StudentItem;