import React, { createContext, useState } from "react";

export const RoutineContext = createContext();

export const RoutineProvider = ({ children }) => {
  const [savedRoutines, setSavedRoutines] = useState([]);

  const addRoutine = (routine) => {
    setSavedRoutines([...savedRoutines, routine]);
  };

  const deleteRoutine = (index) => {
    setSavedRoutines(savedRoutines.filter((_, i) => i !== index));
  };

  return (
    <RoutineContext.Provider value={{ savedRoutines, addRoutine, deleteRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};
