import './auth.scss';
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"
import logo from '../../assets/doggo.png'
import loader from '../../assets/loader.gif'
import { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { login } = useAuth()

    const onFormSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
           const response =  await login( emailRef.current.value, passwordRef.current.value)
           if(!response.ok) {
               setError(response.message)
           }
           history.replace('/')
        }catch(err) {
            setError(err.message)
        }    
        setLoading(false)
    }

    return <>
    <section className="login-view">
        <div className="login__details">
        <div className="logo"><img src={logo} alt="A blazing burning-like fire illustration" /></div>

        <form className="form" onSubmit={onFormSubmit}>
        <h2>Login to your account</h2>
           <p className="error">{error}</p>
            <div className="form--details">
                <label htmlFor="email">Email Address</label>
                <input type="email" ref={emailRef} name="email" id="email" placeholder="your email address" required />
            </div>
            <div className="form--details">
                <label htmlFor="email">Password</label>
                <input type="password" ref={passwordRef} name="password" id="password" placeholder="password (6 or more characters)" required />
            </div>
            <button disabled={loading} className="btn btn-gradient">{loading && loading ? <img src={loader} alt="Loading Circles" /> : 'Login'}</button>
            <p>Don't have an account? <span className="create"><Link to="/signup">Create an account</Link></span></p>
        </form>
        </div>

        <div className="login__image">
        </div>
    </section>
    </>
}

export default Login