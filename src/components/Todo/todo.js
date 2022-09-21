import Item from "../Item/Item";
import "./todo.css";

const Todo = (props) => {
  
    const tasks = [
        {
            name: "Eten",
            done: false,
            id: 1
        },
        {
            name: "Drinken",
            done: false,
            id: 2
        },
        {
            name: "Kat uitlaten",
            done: false,
            id: 3
        },
        {
            name: "Werk",
            done: false,
            id: 4
        },
        {
            name: "Ademen",
            done: false,
            id: 5
        },
        {
            name: "Praten",
            done: false,
            id: 6
        },
        
    ];

    let listItems = tasks.map ( task => {
       return <Item key={task.id} name={task.name} done={task.done}/>
    });

    return (
        <article className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">Things to do:</h1>
            </header>
            <ul className="todo__list">
                {listItems}
            </ul>
        </article>
    );
}

export default Todo;