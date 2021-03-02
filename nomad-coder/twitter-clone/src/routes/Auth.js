import React, {useState} from "react";

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="email" value={email} onChange={onChange} required/>
                <input name="password" type="password" placeholder="password" value={password} onChange={onChange} required/>
                <input type="submit" value="Log In"/>
            </form>
            <div>
                <button>Continue with Google</button>
            </div>
        </div>
    )
};