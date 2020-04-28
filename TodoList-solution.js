const App = () => {
    const [entrys, setEntrys] = React.useState([]);

    const addEntry = content => {
        const newEntrys = [
            ...entrys,
            {
                content,
                completed: false
            }
        ];
        setEntrys(newEntrys);
    };

    const removeEntry = index => {
        const newEntrys = [...entrys];
        newEntrys.splice(index, 1);
        setEntrys(newEntrys);
    };

    const toggleEntry = index => {
        const newEntrys = [...entrys];
        newEntrys[index].completed = !newEntrys[index].completed;
        setEntrys(newEntrys);
    };

    // Assamble all components together
    return (
        <div className="todolist_cotainer">
            <h1>ToDo List</h1>
            <Input addEntry={addEntry} />
            
            {/*Render all entries that are NOT marked as DONE*/}
            <h2>ToDo</h2>
            {entrys.map((entry, index) =>
                entry.completed ? (
                    <span></span>
                ) : (
                        <TodoEntry
                            content={entry.content}
                            index={index}
                            removeEntry={removeEntry}
                            toggleEntry={toggleEntry}
                            key={entry.content + index}
                        />
                    )
            )}
                        
            {/*Render all entries that ARE marked as DONE*/}
            <h2>Done</h2>
            {entrys.map((entry, index) =>
                entry.completed ? (
                    <DoneEntry
                        content={entry.content}
                        index={index}
                        removeEntry={removeEntry}
                        key={entry.content + index}
                    />
                ) : (
                        <span></span>
                    )
            )}
        </div>
    );
};

const DoneButton = props => {
    return (
        <span className="todolist_cotainer_todoEntry_buttonContainer">
            <button
                className="todolist_cotainer_todoEntry_buttonContainer_button doneButton"
                onClick={() => props.toggleEntry(props.index)}
            >
                <svg className="todolist_cotainer_todoEntry_buttonContainer_button_icon doneButton_icon"height="512pt"viewBox="0 -21 512.016 512"width="512pt"xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"/><path fill="currentColor" d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"/></svg>
            </button>
        </span>
    );
};

const DeleteButton = props => {
    return (
        <span className="todolist_cotainer_todoEntry_buttonContainer">
            <button
                className="todolist_cotainer_todoEntry_buttonContainer_button deleteButton"
                onClick={() => props.removeEntry(props.index)}
            >
                <svg className="todolist_cotainer_todoEntry_buttonContainer_button_icon deleteButton_icon" height="511.99998pt" viewBox="1 1 511.99998 511.99998" width="511.99998pt" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m256 0c-141.386719 0-256 114.613281-256 256s114.613281 256 256 256 256-114.613281 256-256c-.167969-141.316406-114.683594-255.832031-256-256zm0 480c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.132812 123.65625-100.34375 223.867188-224 224zm0 0"/><path fill="currentColor" d="m380.449219 131.550781c-6.25-6.246093-16.378907-6.246093-22.625 0l-101.824219 101.824219-101.824219-101.824219c-6.140625-6.355469-16.269531-6.53125-22.625-.390625-6.355469 6.136719-6.53125 16.265625-.390625 22.621094.128906.132812.257813.265625.390625.394531l101.824219 101.824219-101.824219 101.824219c-6.355469 6.136719-6.53125 16.265625-.390625 22.625 6.136719 6.355469 16.265625 6.53125 22.621094.390625.132812-.128906.265625-.257813.394531-.390625l101.824219-101.824219 101.824219 101.824219c6.355469 6.136719 16.484375 5.960937 22.621093-.394531 5.988282-6.199219 5.988282-16.03125 0-22.230469l-101.820312-101.824219 101.824219-101.824219c6.246093-6.246093 6.246093-16.375 0-22.625zm0 0"/></svg>
            </button>
        </span>
    );
};

const TodoEntry = props => {
    return (
        <div className="todolist_cotainer_todoEntry">
            <span className="todolist_cotainer_todoEntry_content">
                {props.content}
            </span>
            <DoneButton index={props.index} toggleEntry={props.toggleEntry} />
            <DeleteButton index={props.index} removeEntry={props.removeEntry} />
        </div>
    );
};

const DoneEntry = props => {
    return (
        <div className="todolist_cotainer_doneEntry">
            <span className="todolist_cotainer_doneEntry_content">
                {props.content}
            </span>
            <DeleteButton index={props.index} removeEntry={props.removeEntry} />
        </div>
    );
};


const Input = props => {
    const [inputValue, setInputValue] = React.useState("");
    return (
        <form
            className="todolist_cotainer_inputForm"
            onSubmit={event => {
                event.preventDefault();
                if (inputValue !== "") {
                    props.addEntry(inputValue);
                    setInputValue("");
                }
            }}
        >
            <input
                value={inputValue}
                placeholder="New ToDo?"
                onChange={() => setInputValue(event.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};


ReactDOM.render(<App />, document.getElementById("root"));