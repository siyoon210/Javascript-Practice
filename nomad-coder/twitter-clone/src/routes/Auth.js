import React, {useState} from "react";
import {authService} from "fbase";
import {firebaseInstance} from "fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();

        let data;
        try {
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password)
            } else {
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data);
        } catch (error) {
            console.log(error);
            setErrorMsg(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        const data = authService.signInWithPopup(provider);
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="email" value={email} onChange={onChange} required/>
                <input name="password" type="password" placeholder="password" value={password} onChange={onChange}
                       required/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <span>{errorMsg}</span>
            <span onClick={toggleAccount}> {newAccount ? "Sign In" : "CreateAccount"} </span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
            </div>
        </div>
    )
};

export default Auth;