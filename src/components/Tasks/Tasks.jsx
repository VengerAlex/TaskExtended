import React, {useState} from 'react';
import './Tasks.scss'

const Tasks = ({thing, title, color, todoAddHandler}) => {
    const [inputSearch, setInputSearch] = useState('')

    const submitHandler = () => {
        const obj = {id: Math.random(), text: inputSearch}

        todoAddHandler(obj)
        setInputSearch('')
    }

    return (
        <div className='todo__tasks'>
            <h1 style={{color: color}} className='todo__title'>
                {title ? title : 'All Items'}
                <img src="img/edit.svg" alt="#"/>
            </h1>
            {thing.map(el => (
                <div className='todo__wrapper'>
                    <input
                        checked={el.completed}
                        className='todo__checkbox'
                        type="checkbox"
                        id={el.id}
                    />
                    <label className='todo__label' htmlFor={el.id}>
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </label>
                    <input className='todo__text' type="text" value={el.text}/>
                </div>
            ))}
            <div className="todo__form">
                <input
                    className='input todo__input'
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    placeholder='New Task'
                    type="text"
                />
                <button
                    onClick={submitHandler}
                    className='todo__btn'>
                    <img src="/img/add.svg" alt="add task"/>
                </button>
            </div>
        </div>
    );
};

export default Tasks;