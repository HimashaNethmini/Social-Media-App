import { Link } from "react-router-dom"
import "./login.scss"

const login = () => {
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
                    <button>Log in</button>

                </form>

            </div>
        </div>
    </div>
  )
}

export default login
