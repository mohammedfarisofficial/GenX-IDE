import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import "./style.scss";
//components
import InputBox from "../../components/Form/InputBox";
//api
import axios from "axios";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state/reducers/authSlice.js";
import { Button } from "@adobe/react-spectrum";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  //email and password login
  const loginHandler = async () => {
    setIsLoading(true);
    try {
      const formData = {
        email,
        password,
      };
      console.log(formData);
      const loginResponse = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        formData
      );
      const { status, user, token } = loginResponse.data;
      if (status === "SUCCESS") {
        dispatch(setLogin({ user, token }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  //github + passport login
  const githubLoginHandler = async () => {
    try {
      // Redirect the user to the GitHub login page on the server
      window.location.href = `${
        import.meta.env.VITE_SERVER_URL
      }/api/auth/github`;
      // window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("GitHub login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-welcome">
          <h3>Welcome back</h3>
          <p>Sign in to your account</p>
        </div>
        <InputBox
          label="Your Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div className="forgotpassword-container">
          <p>Forgot password?</p>
        </div>
        <Button isPending={isLoading} onPress={loginHandler} variant="accent">
          Sign In
        </Button>
        <h6 className="login-or-divider">OR</h6>
        <Button onClick={githubLoginHandler} variant="accent">
          Github
        </Button>
      </div>
    </div>
  );
};

export default Login;
