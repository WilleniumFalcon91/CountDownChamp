import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "December 25, 2017",
            newDealine: ''
        }
    }

    changeDealine() {
        // console.log('state', this.state);
        this.setState({deadline: this.state.newDealine});
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <div>
                    <input 
                        placeholder="new date"
                        onChange={event => this.setState({newDealine: event.target.value})}
                     />
                    <button onClick={() => this.changeDealine()}>Submit</button>
                </div>
                
            </div>
        )
    }
}

export default App;