import React from "react";
import Item from "../Item/Item";
import "./todo.css";
import tasksObject from "../../Data/tasks";

class Todo extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    // ComponentDidMount runt na het aanmaken en tekenen van een component
    componentDidMount() {
        this.setState ({
            tasks: tasksObject.tasks,
        });
    }

    // ComponentDidUpdate runt na het updaten van de state
    componentDidUpdate() {
        console.log("Vanuit de update");
    }

    render(){

        let items =  this.state.tasks.map(task => {
            return <Item name={task.name} key={task.id}></Item>
        });

        return (
            <article onClick={() => {this.state.tasks.push(1)}} className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">Things to do:</h1>
                </header>
                <ul className="todo__list">
                    {items}
                </ul>
            </article>
        );
    }
}

export default Todo;