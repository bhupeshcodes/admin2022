// material-ui
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGOUT, ACCOUNT_INITALIZE } from "../store/actions/actions";
// styles
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
});
// ==============================|| LOADER ||============================== //
const Loader = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        dispatch({
          type: ACCOUNT_INITALIZE,
          payload: {
            isLoggedIN: true,
            user: {
              id: user.uid,
              email: user.email,
              name: user.displayName,
            },
          },
        });
      } else {
        localStorage.removeItem("authUser");
        dispatch({
          type: LOGOUT,
        });
      }
    });
  }, []);

  return (
    <LoaderWrapper>
      <LinearProgress color="primary" />
    </LoaderWrapper>
  );
};

export default Loader;
