import { useEffect } from "react";
import HomePage from "./pages/homepage/HomePage.page";
import Error404 from "./pages/error404/Error404.page";
import 'react-toastify/dist/ReactToastify.css';
import { useStateContext } from "./context/provider";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "./components/LoadingSpinner.component";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import Nav from "./components/Nav.component";
import ProfilePage from "./pages/profile/Profile.page";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";

function App() {
  const {pageLoading, User, isProfileCompleted, setPageLoading} = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if(User !== "") {
      if(!User || (User && !isProfileCompleted)) {
        if(location.pathname !== "/") {
          document.location.href = "/";
        }
      }
    }

    setTimeout(() =>{
      setPageLoading(false);
    }, 1000);
  }, [location.pathname, User, isProfileCompleted]);
  return (
    <>
        <Tooltip anchorSelect=".tooltip"/>
        {(User && isProfileCompleted) && <Nav/>}

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        <ToastContainer/>
        {pageLoading && <LoadingSpinner/>}
    </>
  );
}

export default App;
