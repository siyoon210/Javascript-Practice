import React from "react";
import Food from "./Food"

const foodILike = [{name: "kimchi"}, {name: "ramen"}, {name: "fried chicken"}]

function App() {
    return (
        <div>
            {foodILike.map((food) => {
                return <Food fav={food.name}/>
            })}
        </div>
    )
}

export default App
