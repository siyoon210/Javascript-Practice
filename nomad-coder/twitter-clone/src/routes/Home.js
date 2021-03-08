import React, {useState} from "react";
import {dbService} from "fbase";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const onClick = async () => {
        await dbService.collection("nweet").add({
            nweet,
            createdAt: Date.now(),
        });
        setNweet("");
    }
    const onChange = (event) => {
        const {target: {value}} = event;
        setNweet(value);
    }
    return (
    <div>
        <form>
            <input onChange={onChange} type={"text"} placeholder={"무슨 생각을 하고 있는가~"} maxLength={120}/>
            <input onClick={onClick} type={"button"} value={"nweet"}/>
        </form>
    </div>
    );
};

export default Home;