import "./register.scss"

const register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Lama Social</h1>
                <p>
                    Hi.. This is Himasha. I am trying to do the website better.
                    Everytime I try new thing it helps me improve a better verion of myself
                </p>
                <span>Do you have an account ? </span>
                <button>Login</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>

                </form>

            </div>
        </div>
    </div>
  )
}


export default register
