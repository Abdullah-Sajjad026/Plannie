import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { useAuthContext } from "../../../contexts/auth-context";

export default function DashboardLayout() {
  const { logoutUser } = useAuthContext();

  return (
    <div className="d-flex py-5 vh-100 gap-5">
      {/* ------- */}
      <div
        style={{ flexBasis: "200px", flexGrow: "0" }}
        className="overflow-auto py-1 d-flex flex-column gap-4"
      >
        <div className="d-flex flex-column gap-4">
          <NavLink to="/app/tasks" className="sidebar-link">
            Tasks
          </NavLink>
          <NavLink to="/app/locations" className="sidebar-link">
            Locations
          </NavLink>
        </div>

        <div className="mt-auto mx-2">
          <Button color="black" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      </div>

      {/* ------- */}
      <div className="overflow-auto flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
