import Test from "./pages/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./globalStyles";
import ViewRFQs from "./pages/ViewRFQs";
import Rfqs from "./pages/Rfqs";
import Project from "./pages/Project";
import ReportLog from "./pages/ReportLog";
import SupportHub from "./pages/SupportHub";
import Header from "./customComponents/header/Header";

function App() {
  return (
    <div className="h-screen w-full">
      <Router>
        <GlobalStyle />
        <div className=" w-full  sticky top-0">
          <Header />
        </div>
        <div className="h-full">
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/viewRFQs" element={<ViewRFQs />} />
            <Route path="/rfqs" element={<Rfqs />} />
            <Route path="/project" element={<Project />} />
            <Route path="/report-log" element={<ReportLog />} />
            <Route path="/support-hub" element={<SupportHub />} />
          </Routes>
          {/* <Test />
          <Dashboard/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
