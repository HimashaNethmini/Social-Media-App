import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const { login } = useContext (AuthContext);

    const handleLogin = () => {
        login();
    };

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    Hi.. This is Himasha. I am trying to do the website better.
                    Everytime I try new thing it helps me improve a better verion of myself
                </p>
                <span>Don't have an account ? </span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button onClick ={handleLogin}>Log in</button>

                </form>

            </div>
        </div>
    </div>
  )
}

export default Login;
