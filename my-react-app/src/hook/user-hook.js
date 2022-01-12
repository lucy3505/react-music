import { UserContext, TokenContext } from "../App";
import { useContext } from "react";
function useUserContext() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  return [user, token];
}

export default useUserContext;
