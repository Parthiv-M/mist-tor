// routes for the application

// import pages
import LandingPage from "./../pages/LandingPage";
import ErrorPage from "../pages/error/Error";
import AnnnouncementCards from "../components/AnnouncementCards";

const routes = [  
  {
    path:'/components/AnnouncementCards',
    component: AnnnouncementCards,
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