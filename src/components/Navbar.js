import React, { useContext, useState} from 'react';
import { RoleContext } from '../AppContext';
import "./Navbar.css"
import { Link } from 'react-router-dom';
// import { BrowserRouter as Link } from "react-router-dom";


const Navbar = () => {
  const { role, setRole } = useContext(RoleContext);
  const [disable,setDisable] = useState(false)

  

  // Handle role switching
  const handleRoleChange = (e) => {
    setRole(e.target.value)
    };
   


  return (
   
    <div className="navbar" >
    <h2>Role Based Access Control</h2>
    <div className='Buttons'  >
    <Link className='navLink' to='/users/admin'>
     <button disabled={disable} id="btn" className={role === 'Admin' ? 'active' : 'inactive'}  value="Admin"  onChange={handleRoleChange} onClick={()=>{setRole("Admin"); setDisable(true)}} >Admin</button>
    </Link>
    <Link className='navLink' to='/users/editor'>
      <button disabled={disable}  id="btn" className={role === 'Editor' ? 'active' :'inactive'} value="Editor"   onChange={handleRoleChange} onClick={()=>{setRole("Editor"); setDisable(true) }}>Editor </button>
    </Link>
    <Link className='navLink' to='/viewer'>
       <button disabled={disable} id="btn" className={role === 'Viewer' ? 'active' :'inactive'} value="Viewer"   onChange={handleRoleChange} onClick={()=>{setRole("Viewer");setDisable(true) }}>Viewer</button>
    </Link>
     
    </div>
    </div>
 
  );
};

export default Navbar;
