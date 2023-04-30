import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.component";
import Error404 from "./pages/error404/Error404.component";
import History from "./pages/history/History.component";

const routes = [
  {
    path: "/",
    element: <HomePage/>
  }, {
    path: "/history",
    element: <History/>
  }, {
    path: "*",
    element: <Error404/>,
  },
];

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <div className="wrapper">
        <RouterProvider router={router}/>
      </div> 
    </>
  );
}

export default App;
