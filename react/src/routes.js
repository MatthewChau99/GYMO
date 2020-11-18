import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, UserLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import PersonalInfo from "./views/PersonalInfo";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import BlogPosts from "./views/BlogPosts";
import Login from "./views/Login";
import Sign from "./views/Sign";
import CalorieCalculator from "./views/CalorieCalculator";
import BlogDetails from "./views/BlogDetails";
import UserProfile from "./views/UserProfile";
import about from "./views/about";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/personal-info",
    layout: DefaultLayout,
    component: PersonalInfo
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/login-in",
    layout: UserLayout,
    component: Login
  },
  {
    path: "/sign-up",
    layout: UserLayout,
    component: Sign
  },
  {
    path: "/calorie-calculator",
    layout:DefaultLayout,
    component: CalorieCalculator
  },
  {
    path: "/blog-details",
    layout:DefaultLayout,
    component: BlogDetails
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/about",
    layout: DefaultLayout,
    component: about
  }
];
