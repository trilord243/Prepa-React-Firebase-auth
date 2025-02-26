
import { useState } from 'react';
import { app } from '../crendenciales';


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginForm from '../Componetns/Login';
import Login from '../Componetns/Login';
import { Link } from 'react-router';


const auth = getAuth(app);

export default function HomePage() {


    const [user, setUser] = useState(null);


    onAuthStateChanged(auth, (userConnected) => {
        console.log(userConnected)
        if (userConnected) {
            setUser(userConnected);
            console.log(userConnected)
        } else {
            setUser(null);
        }

    })

    const logout = () => {
        auth.signOut()
    }

    return (
        <div>
            <Link to="/profile">profile</Link>
            {user ? (
                <>

                    <h1>Usuario coneccted {user.email}</h1>
                    <button onClick={logout}   >Logout </button>
                </>


            ) : <Login />}
        </div>
    )
}
