import { useState } from "react";

const LoginForm = () => {

    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

// Handle Form subsmission
const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password) {
        alert(`Welcome, ${username}`);
    }else {
        alert("Please fill all the field");
    }
}


    return (
        <>
            <div className="login-container">
                <form onSubmit={handleSubmit} className='login-form'>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id='username'
                            type="text"
                            placeholder='Enter your username'
                            autoComplete='off'
                            onChange={(e)=> SetUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder='Enter your password'
                            autoComplete='off' 
                            onChange={(e) => SetPassword(e.target.value)}    
                        />
                    </div>
                    <button type='submit' className='btn-login'>Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;
