import React, {useState, useEffect} from "react";
import {dbService} from "fbase";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService.collection("nweet").onSnapshot(snapshot => {
            const nweetsArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setNweets(nweetsArray);
        })
    }, []);

    const onClick = async () => {
        await dbService.collection("nweet").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid
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
                        <h4>{nweet.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;