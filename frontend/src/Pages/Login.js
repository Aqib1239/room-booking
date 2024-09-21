import Header from "../Common/Header";
import Footer from "../Common/Footer";
import './Login.css';
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    let navigate = useNavigate();
    let [email, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let login = async () => {
        try {
            let result = await fetch(`https://room-booking-api-umber.vercel.app//login`, {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            if (result.email) {
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/userhome');
            }
        } catch {
            alert("Email and Passwor does not metched");
        }
    }
    return (
        <div>
            <Header />
            <div className="row m-auto justify-content-center login-base">
                <div className="col-5 login-main">
                    <h2 align="center">User Login</h2>
                        <input type="text" name="username" placeholder="Write Username"
                            onChange={(e) => setUsername(e.target.value)} value={email} required />
                        <input type="password" name="pswd" placeholder="Write Password"
                            onChange={(e) => setPassword(e.target.value)} value={password} required />
                        <button type="submit" onClick={login}>Login</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Login;
