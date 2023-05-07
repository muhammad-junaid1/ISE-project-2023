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

function App() {
  const {pageLoading} = useStateContext();
  return (
    <>
        <Tooltip anchorSelect=".tooltip"/>
        <Nav/>

        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </div>
        <ToastContainer/>
        {pageLoading && <LoadingSpinner/>}
    </>
  );
}

export default App;
