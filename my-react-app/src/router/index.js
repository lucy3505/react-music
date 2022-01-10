import Home from "./../pages/home";
import Profile from "./../pages/profile";
import User from "./../pages/user";
import Detail from "./../pages/detail";
import Detail2 from "./../pages/detail2";
import Login from "./../pages/login";
import About from "./../pages/about/about";
import { Culture, History, Contact, Join } from "./../pages/about/about";
export const routes = [
  {
    path: "/detail2",
    component: Detail2,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        component: History,
        exact: true,
      },
      {
        path: "/about/culture",
        component: Culture,
      },
      {
        path: "/about/contact",
        component: Contact,
      },
      {
        path: "/about/join",
        component: Join,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];
