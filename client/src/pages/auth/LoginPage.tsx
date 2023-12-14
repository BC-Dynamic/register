import React, { useState } from "react";
import axios from "axios";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/token/", {
            username, password
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message);
            }
            )
    }


    return (
        <div>
            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={handleLogin}> Submit</button>
        </div>
    )
};

export default LoginPage;
