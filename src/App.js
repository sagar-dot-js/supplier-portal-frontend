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
import SupplierAdminApp from "./pages/SupplierAdminApp";
import Allocations from "./pages/Allocations";
import SupplierAdminAppOverview from "./pages/SupplierAdminAppOverview";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/viewRFQs" element={<ViewRFQs />} />
          <Route path="/RFQs" element={<Rfqs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/report-log" element={<ReportLog />} />
          <Route path="/support-hub" element={<SupportHub />} />
          <Route path="/supp-admin-app" element={<SupplierAdminApp />} />
          <Route path="/allocation" element={<Allocations />} />
          <Route
            path="/Supplier-AdminApp-Overview"
            element={<SupplierAdminAppOverview />}
          />
        </Routes>
        {/* <Test />
          <Dashboard/> */}
      </Router>
    </>
  );
}

export default App;
