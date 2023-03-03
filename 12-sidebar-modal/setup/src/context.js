import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    console.log("open");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom context, adding "use" for naming is requried
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
