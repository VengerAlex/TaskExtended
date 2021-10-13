import React, {useState} from "react";

import List from "./components/List/index";
import AddListBtn from "./components/AddListBtn/AddListBtn";
import {lists, colors, tasks} from './db.json'

const App = (props) => {
    const [items, setItems] = useState(lists.map((el) => {
                el.color = colors.filter(color => color.id === el.colorId)[0].name

                return el
    }))
    const [thing, setThing] = useState(tasks)


    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <ul className="list">
                    <li><img className='list__img' src='/img/list.svg' alt="#"/>
                        <span>All Tasks</span>
                    </li>
                </ul>
                <List
                    items={items}
                    setItems={setItems}
                />
                <AddListBtn
                    colors={colors}
                    setItems={setItems}
                />
            </div>
            <div className="todo__tasks">
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
        </div>
    )
}

export default App;
