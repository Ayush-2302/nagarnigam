"use client";
import { getCurrentUserDetails } from "@/helper/apiservices/garbageCollectorService";
import React, { createContext, useState } from "react";
const newContext = createContext();

const ContextFun = ({ children }) => {
  const [garbageUser, setGarbageUser] = useState([]);

  const load = async () => {
    try {
      const currUser = await getCurrentUserDetails();
      console.log(currUser, "current user");

      setGarbageUser({ ...currUser });
    } catch (error) {
      console.log(error);
      setGarbageUser([]);
    }
  };

  // useEffect(() => {
  //   load();
  // }, []);

  return (
    <div>
      <newContext.Provider value={{ garbageUser, setGarbageUser, load }}>
        {children}
      </newContext.Provider>
    </div>
  );
};

export default ContextFun;
export { newContext };
