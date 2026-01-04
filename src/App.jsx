import HomePage from "./routes/homePage/homePage";
import SinglePage from "./routes/singlePage/singlePage";
import LoginPage  from "./routes/loginPage/loginPage";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import ProfilePage from "./routes/profilePage/ProfilePage";

const router = createHashRouter([
    {
      path: "/" ,
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <HomePage/>

        },
        {
          path:"/list",
          element: <ListPage/>
        },
        {
          path:"/:id",
          element: <SinglePage/>

        },
        {
          path:"/login",
          element: <LoginPage/>

        },
        {
          path:"/profile",
          element: <ProfilePage />

        },
      ]
    }
  ]);

const App = () => {

  return ( 
      <RouterProvider router={router}/>
   );
}
 
export default App;
