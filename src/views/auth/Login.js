import './auth.scss';
import logo from '../../assets/doggo.png'

const Login = () => {
    return <>
    <section className="login-view">
        <div className="login__details">
        <div className="logo"><img src={logo} alt="A blazing burning-like fire illustration" /></div>

        <form className="form">
        <h2>Login to your account</h2>
            <div className="form--details">
                <label htmlFor="email">Email Address</label>
                <input type="email" autoFocus="true" name="email" id="email" placeholder="your email address" required />
            </div>
            <div className="form--details">
                <label htmlFor="email">Password</label>
                <input type="password" name="password" id="password" placeholder="password" required />
            </div>
            <button className="btn btn-gradient">Login</button>
            <p>Don't have an account? <span className="create">Create account</span></p>
        </form>
        </div>

        <div className="login__image">
        </div>
    </section>
    </>
}

export default Login