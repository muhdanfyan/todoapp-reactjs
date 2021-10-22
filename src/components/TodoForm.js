import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    
    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id : Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                className="todo-input"
                type="text"
                placeholder="Add ToDo"
                value={input} 
                name='text'
                onChange={handleChange}
            />
            
            <button className='todo-button'>Add Todo</button>

        </form>
    )
}

export default TodoForm
