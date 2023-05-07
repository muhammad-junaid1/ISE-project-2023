import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.page";
import Error404 from "./pages/error404/Error404.page";
import History from "./pages/history/History.page";
import { useStateContext } from "./context/provider";
import LoadingSpinner from "./components/LoadigSpinner.component";

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
  const {pageLoading} = useStateContext();
  return (
    <>
        <RouterProvider router={router}/>

        {pageLoading && <LoadingSpinner/>}
    </>
  );
}

export default App;
