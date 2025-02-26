import { useState } from "react";
import { app } from '../crendenciales';


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth(app);

const Login = () => {
    const [login, setLogin] = useState(true)
    const [error, seterror] = useState('')
    async function authFuncion(e) {
        e.preventDefault();
        console.log(email, password)

        if (!login) {
            await createUserWithEmailAndPassword(auth, email, password)

        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password)

            } catch (error) {
                console.log(error.message)
                if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                    seterror('El usuario no existe')
                }

            }
        }

    }
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('')

    return (
        <div style={styles.container}>
            {error && <div>{error}</div>}
            <form onSubmit={authFuncion} style={styles.form}>
                {login ? <h2>Iniciar Sesión </h2> : <h2>Registrarse</h2>}
                <div style={styles.inputGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        placeholder="Ingrese su email"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        placeholder="Ingrese su contraseña"
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" onClick={() => setLogin(true)} style={styles.button}>
                    Ingresar
                </button>


                <button onClick={() => setLogin(false)}>Si no tienes cuenta registrate</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    },
    form: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    inputGroup: {
        marginBottom: '1rem'
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        marginTop: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default Login;
