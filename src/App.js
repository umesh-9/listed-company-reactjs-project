import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SingIn from "./pages/SingIn";
import HeaderLayout from "./Components/HeaderLayout";
import Dashboard from "./pages/Dashboard";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="dashboard" element={<HeaderLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="transactions"
            element={
              <h1 className="text-center font-bold sm:flex  items-center">
                Yup! you have NO transactions🤷‍♂️
              </h1>
            }
          />
          <Route
            path="Schedules"
            element={
              <>
                <h1 className="font-bold text-center">
                  Preparing Your Schedules😁
                </h1>
                <img
                  src="https://cdn.dribbble.com/users/4874/screenshots/1792443/timely_dribbble.gif"
                  className="text-center"
                  alt="img"
                />
              </>
            }
          />
          <Route
            path="users"
            element={<h1 className="font-bold text-center">Users....</h1>}
          />
          <Route
            path="settings"
            element={
              <h1 className="font-bold text-center">settings...........</h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
