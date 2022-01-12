import YYDiscover from "@/pages/discover";
import YYMine from "@/pages/mine";
import YYFriend from "@/pages/friend";

const routes = [
  {
    path: "/",
    component: YYDiscover,
    exact: true,
  },
  {
    path: "/mine",
    component: YYMine,
  },
  {
    path: "/friend",
    component: YYFriend,
  },
];

export default routes;
