import React, {useState} from "react";

export default () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    }
    const onChange = (event) => {
        const {target: {value}} = event;
        setNweet(value);
        console.log(nweet);
    }
    return (<div>
        <form>
            <input onChange={onChange} type={"text"} placeholder={"무슨 생각을 하고 있는가~"} maxLength={120}/>
            <input onSubmit={onSubmit} type={"submit"} value={"nweet"}/>
        </form>
    </div>);
};