import { useState } from "react"
import EmptyState from "../component/empty-state/EmptyState"
import HideCompleted from "../component/hideCompleted/HideCompleted"
import TodoForm from "../component/todoForm/TodoForm"
import TodoList from "../component/todoList/TodoList"


const Home = () => {

    const [todos, setTodos] = useState([])

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text: text,
                isCompleted: false
            }
        ])
    }

    const onDelete = (todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id))
    }

    const onChange = (newTodo) => {
        setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
                return newTodo
            }
            return todo
        }))
    }

    const onHideCompleted = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    return (
        <div>
            {todos.length ? <HideCompleted onHideCompleted={onHideCompleted} /> : null}
            <label>Todo</label>
            <TodoForm onAdd={onAdd} />
            {todos.length ? <TodoList todos={todos} onDelete={onDelete} onChange={onChange} /> : <EmptyState />}
        </div>
    )
}

export default Home