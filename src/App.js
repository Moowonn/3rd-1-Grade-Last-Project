import React from "react";
import Main from "./components/Main/Main.jsx"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/main" />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
