import React from "react";
import "./Item.css";

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.className = "";
        this.state = {done: this.props.done}
    }

    onItemClick = () => {
        this.setState({done: !this.state.done});
    }

    render() {
        if (this.state.done) {
            this.className = "todo__item todo__item--done"
        }
        else {
            this.className = "todo__item"
        }
        console.log(this.state.done);
        return (
            <li onClick={this.onItemClick} className={this.className}>{this.props.name}</li>
        );
    }
}

export default Item;