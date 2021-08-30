import './auth.scss';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import logo from '../../assets/doggo.png'
import loader from '../../assets/loader.gif'
import { useRef, useState } from 'react';
import {useAuth} from '../../context/AuthContext'

const Signup = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const {signup } = useAuth()

    const onFormSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
           const response =  await signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
           if(!response.ok) {
               setError(response.message)
           }
           await response.user.updateProfile({ displayName: nameRef.current.value });
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
        <h2>Create an account</h2>
           <p className="error">{error}</p> 
            <div className="form--details">
                <label htmlFor="name">Name</label>
                <input type="name" ref={nameRef} autoFocus={true} name="name" id="name" placeholder="your name" required />
            </div>
            <div className="form--details">
                <label htmlFor="email">Email Address</label>
                <input type="email" ref={emailRef} name="email" id="email" placeholder="your email address" required />
            </div>
            <div className="form--details">
                <label htmlFor="email">Password</label>
                <input type="password" ref={passwordRef} name="password" id="password" placeholder="password (6 or more characters)" required />
            </div>
            <button disabled={loading} className="btn btn-gradient">{loading && loading ? <img src={loader} alt="Loading Circles" /> : 'Create'}</button>
            <p>Already a member? <span className="create"><Link to="/login">Login</Link></span></p>
        </form>
        </div>

        <div className="login__image">
        </div>
    </section>
    </>
}

export default Signup