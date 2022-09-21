import "../components/todo.css";

const Todo = (props) => {
  
    const tasks = [
        {
            name: "Eten",
            done: false,
        },
        {
            name: "Drinken",
            done: true,
        },
        {
            name: "Kat uitlaten",
            done: false,
        },
        {
            name: "Werk",
            done: false,
        },
        {
            name: "Ademen",
            done: false,
        },
        {
            name: "Praten",
            done: false,
        },
        
    ];

    let listItems = tasks.map ( task => {
        if(task.done === true) {
            return <li className="todo__item todo__item--done">{task.name}</li>;
        }
        return <li className="todo__item">{task.name}</li>
    });
    console.log(listItems);

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