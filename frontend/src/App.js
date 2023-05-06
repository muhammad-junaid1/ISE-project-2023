import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.page";
import Error404 from "./pages/error404/Error404.page";
import History from "./pages/history/History.page";
import { useStateContext } from "./context/provider";

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
  const {setUser} = useStateContext();
  const router = createBrowserRouter(routes);

  useEffect(() => {

  }, []);
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
