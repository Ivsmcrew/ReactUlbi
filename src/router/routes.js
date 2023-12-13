import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import MyError from "../pages/MyError";
import Login from "../pages/Login";


export const privateRoutes = [
  {path: '/login', component: Login}, 
  {path: '/about', component: About}, 
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: PostIdPage},
  {path: '/', component: About},
  {path: '*', component: MyError},
]

export const publicRoutes = [
  {path: '*', component: Login},
]