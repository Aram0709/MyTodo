import { useState } from "react"


const TodoForm = ({onAdd}) => {

    const [ value, setvalue ] = useState("")

    const onChang = (e) => {
        setvalue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(value)
        setvalue("")
    }
     
    return(
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChang} />
            <button>Add</button>
        </form>
    )
}

export default TodoForm