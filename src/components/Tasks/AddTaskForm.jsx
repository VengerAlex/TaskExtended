import React, {useState} from 'react';
import './Tasks.scss'
import axios from "axios";

const AddTaskForm = ({addTaskToFolder, items}) => {
    const [isForm, setIfForm] = useState(false)
    const [inputSearch, setInputSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toggleForm = () => {
        setIfForm(!isForm)

        setInputSearch('')
    }

    const addTask = () => {
        if(inputSearch === ''){
            alert('pls enter ur task name')
        }

        setIsLoading(true)
        const task = {listId: items.id, text: inputSearch, checked: false}

        axios.post(`http://localhost:5000/tasks`, task)
            .then(({data}) => {
                addTaskToFolder(items.id, task)
                setIfForm(false)
            })
            .catch(() => alert('smth happened'))
            .finally(() => setIsLoading(false))

    }

    return (
        <>
            <div className="todo__form">
                {!isForm && <>
                    <span className='todo__input'>New Task</span>
                    <button
                        onClick={toggleForm}
                        className='todo__btn'>
                        <img className='add-img' src="/img/add.svg" alt="add task"/>
                    </button>
                </>}
            </div>
            <>
                {isForm && <div className="tasks__form-block">
                    <input
                        className='input todo__input'
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        placeholder='New Task'
                        type="text"
                    />
                    <div className="btn-from">
                        <button
                            disabled={isLoading}
                            onClick={addTask}
                            className='btn-default'>
                            {!isLoading ? 'Add Task' : 'LOADING'}
                        </button>
                        <button
                            onClick={toggleForm}
                            className="btn-default btn-cancel">Cancel</button>
                    </div>
                </div>}
            </>
        </>
    );
};

export default AddTaskForm;