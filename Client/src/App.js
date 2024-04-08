import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'; // ייבוא של axios
import ShowWorkersTable from './Components/showWorkersTable';
import Login from './Components/login';

function App() {
  const token = localStorage.getItem("item");
  
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <Route path="/" element={<ShowWorkersTable />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/showWorkersTable" element={<ShowWorkersTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
