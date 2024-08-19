import { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([
        { title: 'Exercise', description: 'Lets do 30 mins of exercise' },
    ]);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function addTodo() {
        // Create a new todo object
        const newTodo = { title, description };

        // Update the todos state with the new todo
        setTodos([...todos, newTodo]);

        // Clear the input fields
        setTitle("");
        setDescription("");
    }

    function removeTodo(index) {
        // Create a new array without the removed todo
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    return (
        <>
        <div>
            <h1>Todo Application</h1>
            <input 
                type="text" 
                placeholder="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <span>{todo.title}</span>
                    <span>{todo.description}</span>
                    {/* Pass the index to the removeTodo function */}
                    <button onClick={() => removeTodo(index)}>Remove/Completed</button>
                </div>
            ))}
        </div>
        </>
    );
}

export default TodoApp;
