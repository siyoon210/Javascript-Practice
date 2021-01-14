import React from "react";
import Food from "./Food"

const foodILike = [{id: 1, name: "kimchi"}, {id: 2, name: "ramen"}, {id: 3, name: "fried chicken"}]

function App() {
    return (
        <div>
            {foodILike.map((food) => {
                return <Food key={food.id} fav={food.name}/>
            })}
        </div>
    )
}

export default App
