import React from 'react';
import './Tasks.scss'

const Tasks = ({thing}) => {
    return (
        <div className='todo__tasks'>
            <h1 className='todo__title'>TITLE</h1>
            {thing.map(el => (
                <div className='todo__wrapper'>
                    <input
                        className='todo__checkbox'
                        type="checkbox"
                        checked={el.completed}
                        id={el.id}
                    />
                    <label className='todo__label' htmlFor={el.id}>{el.text}</label>
                </div>
            ))}
        </div>
    );
};

export default Tasks;