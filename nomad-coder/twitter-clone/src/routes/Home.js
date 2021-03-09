import React, {useState, useEffect} from "react";
import {dbService} from "fbase";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const readNweets = async () => {
        const dbNweets = await dbService.collection("nweet").get();
        dbNweets.forEach((document) =>{
           const nweetObj = {
               ...document.data(),
               id : document.id
           }
           setNweets((prev) => [nweetObj, ...prev])
        })
    }

    useEffect(() => {
        readNweets();
    }, []);

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
        <div>
            {nweets.map((nweet) => (
                <div key={nweet.id}>
                    <h4>{nweet.nweet}</h4>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Home;