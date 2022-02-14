import { useContext } from "react";

import { FirebaseContext } from "../Contexts/FirebaseContext";

const useAuth = () => {
  const context = useContext(FirebaseContext);

  if (!context) throw new Error("context must used inside provider");

  return context;
};

export default useAuth;
