import React from "react";

class App extends React.Component {
    state = {
        count: 0
    }

    plus = () => {
        console.log('plus')
    }

    minus = () =>{
        console.log('minus')
    }

    render() {
        return (
            <div>
                <h1> The number is {this.state.count} </h1>
                <button onClick={this.plus}>plus</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}

export default App
