import React from 'react';

const Login = () => {
    return (
        <div>
            <div style={{margin:"20px"}}>
                <button>Google Sign in</button>
            </div>
            <h2>Login Here</h2>
            <form>
                <input type="email" name="" id="" placeholder='Your email' /> <br />
                <input type="password" name="" id="" placeholder='password' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;