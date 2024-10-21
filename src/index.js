import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DashboardOverview from './App';
import { RoleProvider } from './AppContext';


ReactDOM.createRoot(document.getElementById('root')
).render(
  <React.StrictMode>
     <RoleProvider>
       <DashboardOverview />
     </RoleProvider>
  </React.StrictMode>,
);
