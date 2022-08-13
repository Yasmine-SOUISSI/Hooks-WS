import React, { Component } from "react";

export default class CounterWithState extends Component {
    state = { count: 0, counter: 0 };
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };
    componentWillMount = () => {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 });
        }, 1000);
    };
    componentWillUnmount = () => {
        clearInterval(this.interval);
    };
    render() {
        return (
            <div>
                <p>CounterWithState</p>
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.count}</p>
                <button onClick={this.decrement}>Decrement</button>
                <p>Counter {this.state.counter}</p>
            </div>
        );
    }
}
