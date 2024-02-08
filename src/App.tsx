import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./container/Layout";
import Cards from "./views/Dashboard/Cards";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard title="Hello" />} />
          <Route path="/dashboard" element={<Dashboard title="Hello" />} />
          <Route path=":slug" element={<Cards />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
