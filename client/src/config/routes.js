// routes for the application

// import pages
import LandingPage from "./../pages/LandingPage";
import ErrorPage from "../pages/error/Error";
import TeamsPage from "../pages/teams/teams";
const routes = [  
  {
    path:'/',
    component: TeamsPage,
    isPrivate: false
  },
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