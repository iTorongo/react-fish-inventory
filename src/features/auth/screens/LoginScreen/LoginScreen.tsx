import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";

const LoginScreen = () => {
  const state = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch();

  return <div>{state.isAuthenticated ? "Authenticated" : "Login Screen"}</div>;
};

export default LoginScreen;
