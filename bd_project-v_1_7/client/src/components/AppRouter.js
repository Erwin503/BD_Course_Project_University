import { Routes, Route } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Auth } from "../pages/Auth";
import { StudentPage } from "../pages/StudentPage";
import { Notfoundpage } from "../pages/Notfoundpage";
import { Service } from "../pages/Service";
import { Spravka } from "../pages/Spravka";
import { ProfileCard } from "../pages/ProfileCard";
import { RequireAuth } from "../hoc/RequireAuth";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="admin"
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />

      <Route path="login" element={<Auth />} />
      <Route path="registration" element={<Auth />} />
      <Route path="student/:Student_ID" element={<StudentPage />} />
      <Route path="/" element={<Service />} />
      <Route path="/spravka" element={<Spravka />} />
      <Route path="/profile" element={<ProfileCard />} />
      <Route path="*" element={<Notfoundpage />} />
      
    </Routes>
  );
};

export default AppRouter;
