import React, { Component } from "react";
import axios from "axios";
import TodoList from './TodoList'
export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greets: "nothing"

        }
    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/greet").then(response => {
            console.log(response.data);
            this.setState({
                greets: response.data
            });
        })
    }

    render() {
        return (
            <div className="App">

                <p> greeting = {this.state.greets}</p>
                <TodoList />
            </div>
        );

    }

}

