import {useAuth} from '../context/AuthContext'

const Home = () => {
    const{ user} =  useAuth()

    return <div>
        <p>Dashboard</p>
        <p>{user.displayName}</p>
    </div>
}

export default Home