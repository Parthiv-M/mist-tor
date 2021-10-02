// routes for the application

// import pages
import LandingPage from "./../pages/LandingPage";
import LoginPage from "./../pages/LoginPage";

const routes = [
  {
    path:'/',
    component: LoginPage,
    isPrivate: false
  },  
  {
    path:'/',
    component: LandingPage,
    isPrivate: false
  },
]

export default routes;