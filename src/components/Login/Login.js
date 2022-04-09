import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <h2>Login Here</h2>
            <form>
                <input type="email" placeholder='Your email' /> <br />
                <input type="password" placeholder='password' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;