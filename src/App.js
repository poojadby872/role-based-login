import React, { useContext,useState,useEffect} from 'react';
import { RoleContext } from './AppContext';
import Navbar from './components/Navbar';
import UserManagement from './components/Admin';
import ContentManagement from './components/Editor';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const DashboardOverview = () => {
  const { role } = useContext(RoleContext); // Get role from context
  const [fetchedRole, setFetchedRole] = useState([]);
  

  // fetching the role from a mock API
  useEffect(() => {
    const fetchRole = async () => {
      const res = await fetch("https://6713538b6c5f5ced66260d88.mockapi.io/users/Admin/Editor");
      const data = await res.json();
      const index = Math.floor(Math.random() * data.length);
  
      setFetchedRole(data[index].role);
    };
    
    fetchRole();
  }, []);
   
  // const roleElement = fetchedRole.map(Role=>(
  //   <div key={Role.id}>
  //     <h4>{Role.name}</h4>
     
  //    <div>{Role.role}</div>
  //   </div>
  // ))

  if (role === null) {
    return <p>Loading...</p>; // Show a loading state until the role is fetched
  }

  return (
    <Router>
      <Navbar/>
      <h1>Welcome to Our Website!</h1>
      <Routes>
        {/* Only allow access to UserManagement if the fetched role is Admin */}
        <Route 
          path='/users/admin' 
          element={role === "Admin" ? <UserManagement /> : <h3>Access Denied</h3>} 
        />
        {/* Only allow access to ContentManagement if the fetched role is Admin */}
        <Route 
          path='/users/editor' 
          element={role === "Editor" ? <ContentManagement /> : <h3>Access Denied</h3>} 
        />
        
        {/* Only allow access to Dashboard if the fetched role is Admin */}
        <Route
          path='/Viewer'
          element={role==="Viewer" ? <Dashboard /> : <h3>Acess Denied</h3>}/>
      </Routes>
    </Router>
  );
};

export default DashboardOverview;
