import { useEffect, useState } from "react";
import "../../styles/auth/auth.css";
import Button from "../../components/Button.component";
import { signInWithGoogle } from "../../utils/firebase";
import { useStateContext } from "../../context/provider";
import LoadingSpinner from "../../components/LoadingSpinner.component";
import { toast } from "react-toastify";
import axios from "axios";

const Auth = () => {
  const [values, setValues] = useState({
    userName: "",
    mobileNumber: "",
    age: "",
    gender: "",
  });
  const {
    authLoading,
    User,
    isProfileCompleted,
    setIsProfileCompleted,
    setUser,
    setAuthLoading,
    BACKEND_URL,
  } = useStateContext();

  const setInputValue = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("values", JSON.stringify(values));
    signInWithGoogle();
  };

  const handleCompleteProfileSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        ...values,
        ...User,
      };
      const response = await axios.post(`${BACKEND_URL}/users`, data);
      if (response.data.status) {
        const user = response?.data?.data;
        if (user) {
          setUser(user);
          localStorage.removeItem("values");
          setAuthLoading(false);
          setIsProfileCompleted(true);
        } else {
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Sorry, Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (!isProfileCompleted) {
      toast.error("Complete your profile!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isProfileCompleted]);

  if (authLoading) {
    return <LoadingSpinner />;
  } else if (!isProfileCompleted) {
    return (
      <div className="finish-profile-container">
        <div className="auth-top-bar">
          <p>Logged in as: </p>
          <strong>{User.email}</strong>
        </div>
        <div className="auth-wrapper">
          <section className="container forms">
            <div className="form Login">
              <div className="form-content">
                <div className="headers">
                  <h1>Complete your profile!</h1>
                  <p>You're almost there.</p>
                </div>
                <form onSubmit={handleCompleteProfileSubmit} action="/">
                  <div className="field input-field">
                    <input
                      type="text"
                      name="userName"
                      onInput={setInputValue}
                      value={values.userName}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="field input-field">
                    <input
                      type="text"
                      value={values.mobileNumber}
                      name="mobileNumber"
                      onInput={setInputValue}
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="field input-field">
                    <input
                      type="number"
                      name="age"
                      value={values.age}
                      onInput={setInputValue}
                      placeholder="Age"
                    />
                  </div>
                  <div className="field input-field">
                    <select
                      value={values.gender}
                      name="gender"
                      onInput={setInputValue}
                    >
                      <option disabled value="">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="field button-field">
                    <Button type="primary" fullWidth>
                      Get In
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
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
                    <input
                      type="text"
                      name="userName"
                      onInput={setInputValue}
                      value={values.userName}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="field input-field">
                    <input
                      type="text"
                      value={values.mobileNumber}
                      name="mobileNumber"
                      onInput={setInputValue}
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="field input-field">
                    <input
                      type="number"
                      name="age"
                      value={values.age}
                      onInput={setInputValue}
                      placeholder="Age"
                    />
                  </div>
                  <div className="field input-field">
                    <select
                      value={values.gender}
                      name="gender"
                      onInput={setInputValue}
                    >
                      <option disabled value="">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="form-link">
                    <a href="/" className="forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="field button-field">
                    <Button type="primary" fullWidth>
                      Sign Up Now
                    </Button>
                  </div>
                </form>
              </div>
              <div className="line"></div>
              <div className="media-options">
                <i className="bx bxl-google google-icon"></i>
                <Button
                  onClick={signInWithGoogle}
                  style={{ backgroundColor: "#4285F4", color: "white" }}
                  fullWidth
                >
                  Sign In With Google
                </Button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default Auth;
