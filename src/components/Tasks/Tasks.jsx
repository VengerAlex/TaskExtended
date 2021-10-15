import React, {useEffect, useState} from 'react';
import './Tasks.scss'
import axios from "axios";

import AddTaskForm from "./AddTaskForm";

const Tasks = ({items, onEditTitle, addTaskToFolder}) => {
    const [inputSearch, setInputSearch] = useState('')


    const editFunc = () => {
        const newTitle = prompt('Name your folder -', items.title)

        if(newTitle){
            onEditTitle(items, newTitle)
        }

        axios.patch('http://localhost:5000/lists/' +  items.id, { title: newTitle })
            .catch(() => alert('Smth happened'))
    }

    return (
        <div className='todo__tasks'>
            <h1 className='todo__title'>
                {items.title ? items.title : 'ALL BASTARDS'}
                <img
                    onClick={editFunc}
                    src="img/edit.svg"
                     alt="#"
                />
            </h1>
            {items?.tasks?.length > 0
                ? items.tasks.map(el => (
                <div key={el.id} className='todo__wrapper'>
                    <input
                        checked={el.completed}
                        className='todo__checkbox'
                        type="checkbox"
                        id={el.id}
                    />
                    <label className='todo__label' htmlFor={el.id}>
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>
                    <input
                        readOnly
                        className='todo__text'
                        type="text"
                        value={el.text}
                    />
                </div>
            ))
            : <div className='empty-box'>Your folder is empty</div>
            }
            <AddTaskForm
                addTaskToFolder={addTaskToFolder}
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                items={items}
            />
        </div>
    );
};

export default Tasks;