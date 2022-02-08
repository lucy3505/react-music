import React from "react";
import { Redirect } from "react-router-dom";
import YYDiscover from "@/pages/discover";
import YYMine from "@/pages/mine";
import YYFriend from "@/pages/friend";
import Recommend from "@/pages/discover/c-pages/recommend";
import Ranking from "@/pages/discover/c-pages/ranking";
import Songs from "@/pages/discover/c-pages/songs";
import DJ from "@/pages/discover/c-pages/djradio";
import Artist from "@/pages/discover/c-pages/artist";
import Album from "@/pages/discover/c-pages/album";
import Song from "@/pages/player";
// const { lazy } = React;
// const YYDiscover = React.lazy(() => import("@/pages/discover"));
// const YYMine = React.lazy((_) => import("@/pages/mine"));
// const YYFriend = React.lazy((_) => import("@/pages/friend"));
// const Recommend = React.lazy((_) =>
//   import("@/pages/discover/c-pages/recommend")
// );
// const Ranking = React.lazy((_) => import("@/pages/discover/c-pages/ranking"));
// const Songs = React.lazy((_) => import("@/pages/discover/c-pages/songs"));
// const DJ = React.lazy((_) => import("@/pages/discover/c-pages/djradio"));
// const Artist = React.lazy((_) => import("@/pages/discover/c-pages/artist"));
// const Album = lazy((_) => import("@/pages/discover/c-pages/album"));
// const Song = lazy((_) => import("@/pages/player"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: YYDiscover,
    // render: () => <Redirect to="/discover/recommend" />,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        exact: true,
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songs",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        component: DJ,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/song",
        component: Song,
      },
    ],
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
