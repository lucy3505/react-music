import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App";
export default function ContextHookDemo() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user, theme);
  return (
    <div>
      {/* <UserContext.Consumer>{(user) => {}}</UserContext.Consumer>//以前的使用 */}
    </div>
  );
}
