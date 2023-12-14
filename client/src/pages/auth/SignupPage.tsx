import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [gender, setGender] = useState<string>("")
    const [birth, setBirth] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const navigate = useNavigate()

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/register/", {
            username,
            email,
            gender,
            birth,
            password,
        })
            .then((response) => {
                console.log(response.data);
                navigate("/login")
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <input type="text" value={username}
                placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <p>
                <input
                    type="radio"
                    name="gender"
                    value={gender}
                    id="male"
                    onChange={e => { setGender(e.target.id) }}
                />
                <label htmlFor="coffee">Male</label>
                <input
                    type="radio"
                    name="gender"
                    value={gender}
                    id="female"
                    onChange={e => { setGender(e.target.id) }}
                />
                <label htmlFor="pumpkin">Female</label>
            </p>
            <input type="date" name="birth" id="birth" value={birth} onChange={e => setBirth(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" value={confirmPassword} placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <input type="checkbox" name="terms" id="terms" />利用規約への同意
            <button type="submit" onClick={handleSignup}> Submit </button>
        </div>

    )
}

export default SignupPage;
