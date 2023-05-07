import { useState } from "react";
import "../../styles/auth/auth.css";
import Button from "../../components/Button.component";
import { signInWithGoogle } from "../../utils/firebase";
import { useStateContext } from "../../context/provider";
import LoadingSpinner from "../../components/LoadigSpinner.component";

const Auth = () => {
  const [values, setValues] = useState({
    userName: "",
    mobileNumber: "",
    age: "",
    gender: "",
  });
  const {authLoading} = useStateContext();

  const setInputValue = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("values", JSON.stringify(values));
    signInWithGoogle();
  }
  if(authLoading) {
    return <LoadingSpinner/>;
  } else {
    return (
      <>
        <div className="auth-wrapper">
          <section className="container forms">
            <div className="form Login">
              <div className="form-content">
                <div className="headers">
                  <h1>Together, we can save lives</h1>
                  <p>Create your account to donate or receive blood</p>
                </div>
                <form onSubmit={handleSubmit} action="/">
                   <div className="field input-field">
                    <input type="text" name="userName" onInput={setInputValue} value={values.userName} placeholder="User Name"/>
                   </div>
                   <div className="field input-field">
                    <input type="text" value={values.mobileNumber} name="mobileNumber" onInput={setInputValue} placeholder="Mobile Number" />
                   </div>
                   <div className="field input-field">
                    <input type="number" name="age" value={values.age} onInput={setInputValue} placeholder="Age"/>
                   </div>
                   <div className="field input-field">
                      <select value={values.gender} name="gender" onInput={setInputValue}>
                        <option disabled value="">Select Gender</option>   
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                   </div>
                   <div className="form-link">
                    <a href="/" className="forgot-password">Forgot Password?</a>
                   </div>
                   <div className="field button-field">
                      <Button type="primary" fullWidth>Sign Up Now</Button>
                      </div>
                   </form>
              </div>
              <div className="line"></div>
              <div className="media-options">
                <i className='bx bxl-google google-icon'></i>
                    <Button onClick={signInWithGoogle} style={{backgroundColor: "#4285F4", color: "white"}} fullWidth>Sign In With Google</Button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Auth;
