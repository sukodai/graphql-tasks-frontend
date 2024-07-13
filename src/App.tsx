import "./App.css";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuestRoute, PrivateRoute } from "./AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<GuestRoute children={<SignIn />} />} />
        <Route path="/signup" element={<GuestRoute children={<SignUp />} />} />
        <Route path="/" element={<PrivateRoute children={<Main />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
