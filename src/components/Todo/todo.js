import React from "react";
import Item from "../Item/Item";
import "./todo.css";

class Todo extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }
    
    /*
    listItems = this.state.tasks.map ( task => {
       return <Item key={task.id} name={task.name} done={task.done}/>
    }); */

    // ComponentDidMount runt na het aanmaken en tekenen van een component
    componentDidMount() {
        this.setState ({
            tasks: this.state.tasks.push(2),
        });
    }

    // ComponentDidUpdate runt na het updaten van de state
    componentDidUpdate() {

    }

    render(){
        console.log("Vanuit de render");
        return (
            <article className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">Things to do:</h1>
                </header>
                <ul className="todo__list">
                    {this.listItems}
                </ul>
            </article>
        );
    }
}

export default Todo;