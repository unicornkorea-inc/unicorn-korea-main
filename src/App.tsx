import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Main, RenewalNotice } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:path" element={<Home />} />
        <Route path="/renewal-notice" element={<RenewalNotice />} />
      </Routes>
    </Router>
  );
};

export default App;
