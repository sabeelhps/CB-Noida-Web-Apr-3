import React from 'react';
import useFormInp from '../../hooks/useFormInp';


const Login = () => {

    const [username, setUsername, resetUsername] = useFormInp();
    const [password, setPassword, resetPassword] = useFormInp();

    const loginFormHandler = (event) => {
        event.preventDefault();
        console.log('logging in....');
        console.log(username);
        console.log(password);


        resetUsername();
        resetPassword();
    }

    return (
        <form style={{margin:'20px',fontSize:'24px'}} onSubmit={loginFormHandler}>
            <div>
                <label htmlFor='username'>Username</label> 
                <input type="text" placeholder='Username' onChange={setUsername} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='password' onChange={setPassword}/>
           </div>
           <button>Login</button> 
      </form>
    )
}

export default Login