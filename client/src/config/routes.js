// routes for the application

// import pages
import PageNotFound from "./../pages/Error";
import LandingPage from "./../pages/LandingPage";


const routes = [  
  { 
    path:'/Error',
    component:PageNotFound,
    isPrivate:false
  },
  {
    path:'/',
    component: LandingPage,
    isPrivate: false
  },
 
]

export default routes;