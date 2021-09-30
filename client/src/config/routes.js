// routes for the application

// import pages
import LandingPage from "./../pages/LandingPage";
import ErrorPage from "../pages/error/Error";

const routes = [  
  {
    path: "/error",
    component: ErrorPage,
    isPrivate: false
  },
  {
    path:'/',
    component: LandingPage,
    isPrivate: false
  },
]

export default routes;