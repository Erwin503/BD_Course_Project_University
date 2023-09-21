import React from "react";
import { Container } from "react-bootstrap";
import CreateCourse from "../components/modals/CreateCourse";
import CreateStudentModal from "../components/modals/CreateStudent";
import CreateTeacherModal from "../components/modals/CreateTeacher";
import CreateGroup from "../components/modals/CreateGroup";
import CreateFaculty from "../components/modals/CreateFaculty";
import DeleteGroup from "../components/modals/DeleteGroup";
import DeleteFaculty from "../components/modals/DeleteFaculty";
import UpdatePage from "../components/modals/UpdatePage";
import Report from "../components/modals/Report";

const Admin = () => {
  React.useEffect(() => {

  }, [])
  return (
    <Container className="d-flex flex-column">
      <CreateStudentModal />
      <CreateTeacherModal />
      <CreateFaculty/> 
      <CreateGroup /> 
      <CreateCourse />
      <DeleteGroup/>
      <DeleteFaculty/>
      <UpdatePage />
      <Report />    
    </Container>
  );
};

export { Admin };
