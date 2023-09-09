import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScene from "./scenes/scenes-auth/scene-login";
import { useEffect } from "react";
import AuthContextProvider from "./contexts/auth-context";
import ProtectedRoute from "./components/protected-route";
import DashboardLayout from "./scenes/scenes-dashboard/components/dashboard-layout";
import TasksScene from "./scenes/scenes-dashboard/scene-tasks";
import { dummyTasks } from "./data/dummy-tasks";
import AppContextProvider from "./contexts/app-context";
import LocationsScene from "./scenes/scenes-dashboard/scene-locations";

function App() {
  useEffect(() => {
    // Saving  a temp user in local storage to be used in login
    localStorage.setItem(
      "auth-user",
      JSON.stringify({
        email: "developer@google.com",
        password: "bmny6798",
      })
    );
    localStorage.setItem("tasks", JSON.stringify(dummyTasks));
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <AppContextProvider>
            <Routes>
              <Route path="/auth/login" element={<LoginScene />} />

              <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/app/tasks" element={<TasksScene />} />
                  <Route path="/app/locations" element={<LocationsScene />} />
                </Route>
              </Route>
            </Routes>
          </AppContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
