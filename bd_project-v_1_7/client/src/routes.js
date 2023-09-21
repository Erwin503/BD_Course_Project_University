import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SERVICE_ROUTE,
  STUDENT_ROUTE,
} from "./utils/consts";

import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { StudentPage } from "./pages/StudentPage";
import { Service } from "./pages/Service";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SERVICE_ROUTE,
    Component: Service,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: STUDENT_ROUTE + "/:Student_ID",
    Component: StudentPage,
  },
];
