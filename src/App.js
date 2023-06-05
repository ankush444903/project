/*import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

// Pages
import Login from './Pages/Login';
import Error404 from './Pages/Error404';
import ResetPassword from './Pages/ResetPassword';
import Dashboard from './Pages/Dashboard';
import Other from './Pages/Other';
import Sidebar from './Components/Sidebar';
import ApplicationTiles from './Pages/ApplicationTiles';
// Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/connection';
import RequestATile from './Pages/RequestATile';

function App() {
  const [authUser,setAuthUser]=useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        setAuthUser(user);
      }
      else
      {
        setAuthUser(null);
      }
    })
  })
  return (
    <Router>
    <div className="App">
    <Sidebar/>
      <Routes>
      <Route exact path='/' element={authUser?<Dashboard/>:<Login/>} />
      <Route exact path='/other' element={authUser?<Other/>:<Login/>} />
      <Route exact path='/apptiles' element={authUser?<ApplicationTiles/>:<Login/>} />
      <Route exact path="/reqtiles" element={authUser?<RequestATile/>:<Login/>}/>
      <Route exact path='/reset' element={<ResetPassword/>} />
      <Route path="*" element={<Error404 />} />
  </Routes>
    </div>
    </Router>
  );
}

export default App;
*/import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Login from './Pages/Login';
import Error404 from './Pages/Error404';
import ResetPassword from './Pages/ResetPassword';
import Dashboard from './Pages/Dashboard';
import Other from './Pages/Other';
import Sidebar from './Components/Sidebar';
import ApplicationTiles from './Pages/ApplicationTiles';
// Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/connection';
import RequestATile from './Pages/RequestATile';

function App() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {authUser ? (
          <Sidebar>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/other" element={<Other />} />
              <Route exact path="/apptiles" element={<ApplicationTiles />} />
              <Route exact path="/reqtiles" element={<RequestATile />} />
              <Route exact path="/reset" element={<ResetPassword />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Sidebar>
        ) : (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
