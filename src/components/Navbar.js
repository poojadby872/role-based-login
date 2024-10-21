import React, { useContext, useState} from 'react';
import { RoleContext } from '../AppContext';
import "./Navbar.css"
import { Link } from 'react-router-dom';
// import { BrowserRouter as Link } from "react-router-dom";


const Navbar = () => {
  const { role, setRole } = useContext(RoleContext);
  const {disable,setDisable} = useState(false)

  

  // Handle role switching
  const handleRoleChange = (e) => {
    setRole(e.target.value)
    };


  return (
   
    <div className="navbar" >
    <h2>Role Based Access Control</h2>
    <div className='Buttons'  >
     <button disabled={disable} id="btn" className={role === 'Admin' ? 'active' : ''}  value="Admin"  onChange={handleRoleChange} onClick={()=>{setRole("Admin"); setDisable(true)}} >
        <Link className='navLink' to='/users/admin'>Admin</Link>
      </button>

      <button disabled={disable}  id="btn" className={role === 'Editor' ? 'active' :''} value="Editor"   onChange={handleRoleChange} onClick={()=>{setRole("Editor"); setDisable(true)}}>
         <Link className='navLink' to='/users/editor'>Editor</Link>
      </button>

       <button disabled={disable} id="btn" className={role === 'Viewer' ? 'active' :''} value="Viewer"   onChange={handleRoleChange} onClick={()=>{setRole("Viewer"); setDisable(true)}}>
          <Link className='navLink' to='/viewer'>Viewer</Link>
      </button>
     
    </div>
    </div>
 
  );
};

export default Navbar;
