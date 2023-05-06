import "../../styles/auth/auth.css";
import Button from "../../components/Button.component";
import {auth} from "../../utils/firebase";
import { signInWithGoogle } from "../../utils/firebase";

const Auth = () => {
    return (
      <>
        <div className="auth-wrapper">
          <section className="container forms">
            <div className="form Login">
              <div className="form-content">
                <div class="headers">
                  <h1>Together, we can save lives</h1>
                  <p>Create your account to donate or receive blood</p>
                </div>
                <form action="/">
                   <div className="field input-field">
                    <input type="text" placeholder="User Name"className="input" />
                   </div>
                   <div className="field input-field">
                    <input type="email" placeholder="Email Address"className="password" />
                   </div>
                   <div className="field input-field">
                    <input type="password" placeholder="Password"className="password" />
                   </div>
                   <div className="field input-field">
                    <input type="text" placeholder="Mobile Number"className="input" />
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

export default Auth;
