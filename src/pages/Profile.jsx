import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../crendenciales";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router";


const auth = getAuth(app);

export default function Profile() {

    const navigate = useNavigate();


    const [user, setUser] = useState(null);





    onAuthStateChanged(auth, (userConnected) => {
        console.log(userConnected)
        if (userConnected) {
            setUser(userConnected);
            console.log(userConnected)
        } else {
            navigate('/')

        }

    })






    return (
        <div>Profile </div>
    )
}
