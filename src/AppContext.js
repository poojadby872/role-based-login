import React, { createContext, useState } from 'react';

// Create RoleContext
export const RoleContext = createContext();

// RoleProvider component to manage the current role state globally
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('')

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
