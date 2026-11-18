import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import PageLayout from "./components/layout/PageLayout";

import Home from "./pages/Home";
import Compositions from "./pages/Compositions";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/composiciones" element={<Compositions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
