import './auth.scss';
import logo from '../../assets/doggo.png'

const Signup = () => {
    return <>
    <section className="login-view">
        <div className="login__details">
        <div className="logo"><img src={logo} alt="A blazing burning-like fire illustration" /></div>

        <form className="form">
        <h2>Create an account</h2>
            <div className="form--details">
                <label htmlFor="name">Name</label>
                <input type="name" autoFocus="true" name="name" id="name" placeholder="your name" required />
            </div>
            <div className="form--details">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="your email address" required />
            </div>
            <div className="form--details">
                <label htmlFor="email">Password</label>
                <input type="password" name="password" id="password" placeholder="password" required />
            </div>
            <button className="btn btn-gradient">Create</button>
            <p>Have an account? <span className="create">Login</span></p>
        </form>
        </div>

        <div className="login__image">
        </div>
    </section>
    </>
}

export default Signup