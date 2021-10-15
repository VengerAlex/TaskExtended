import React, {useState} from 'react';
import './Tasks.scss'
import axios from "axios";

const AddTaskForm = ({inputSearch, setInputSearch, addTaskToFolder, items}) => {
    const [isForm, setIfForm] = useState(false)

    const openForm = () => {
        setIfForm(true)
    }
    const closeForm = () => {
        setIfForm(false)
    }

    const addTask = () => {
        const task = {listId: items.id, text: inputSearch, checked: false}

        axios.post(`http://localhost:5000/lists/${items.id}/tasks`, { text: inputSearch, checked: false})
            .then(({data}) => console.log(data))

        setInputSearch('')
    }

    return (
        <>
            <div className="todo__form">
                {!isForm && <>
                    <span className='todo__input'>New Task</span>
                    <button
                        onClick={openForm}
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
                            onClick={addTask}
                            className='btn-default'>
                            Add Task
                        </button>
                        <button
                            onClick={closeForm}
                            className="btn-default btn-cancel">Cancel</button>
                    </div>
                </div>}
            </>
        </>
    );
};

export default AddTaskForm;