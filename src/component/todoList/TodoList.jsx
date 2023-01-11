

const TodoList = ({todos, onDelete,onChange}) => {
    
    return(
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                                onChange({
                                    ...todo,
                                    isCompleted: e.target.checked
                                })
                            }} />
                            {todo.text}
                            <button onClick={() => {
                                onDelete(todo)
                            }}>X</button>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default TodoList