import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Card, Row, Col } from "react-bootstrap";

const GroupBar = observer(() => {
  const { student } = useContext(Context);
  return (
    <Row>
      <h4>Группа</h4>
      {student.Groups.map((group) => (
        <Col xs={3} key={group.Group_ID}>
          <Card
            style={{ textAlign: "center", margin: "2px" }}
            className="p-2"
            onClick={() => student.setSelectedGroup(group)}
            border={
              group.Group_ID === student.selectedGroup.Group_ID
                ? "primary"
                : "light"
            }
          >
            {group.Group_Name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default GroupBar;
