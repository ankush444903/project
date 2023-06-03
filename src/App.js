import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Settings.jsx';
import Other from './pages/Other.jsx';
import Comment from './pages/Comment.jsx';
import ProductService from './pages/ProductService.jsx';
import Form from './pages/From.jsx';
import Settings1 from './pages/Settings1.jsx';
import Settings2 from './pages/Settings2.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/Settings" element={<Settings />}>
  <Route path="/Settings1" element={<Settings1 />} />
  <Route path="/Settings2" element={<Settings2 />} />
</Route>
          <Route path="/comment" element={<Comment />} />
          <Route path="/Other" element={<Other />} />
          <Route path="/Form2" element={<ProductService />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;