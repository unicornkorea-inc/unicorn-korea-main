import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home, Main, RenewalNotice } from "./components";
import SuccessStory from "./components/Main/SuccessStoryPage";
import NewsDetail from "./components/News/NewsDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:path" element={<Home />} />
        <Route path="/renewal-notice" element={<RenewalNotice />} />
        <Route path="/news-detail" element={<NewsDetail />} />
        <Route path="/success-story" element={<SuccessStory />} />
      </Routes>
    </Router>
  );
};

export default App;
