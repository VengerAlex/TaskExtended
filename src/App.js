import React, {useState} from "react";

import List from "./components/List/index";
import AddListBtn from "./components/AddListBtn/AddListBtn";
import {lists, colors, tasks} from './db.json'
import Tasks from "./components/Tasks/Tasks";

const App = (props) => {
    const [items, setItems] = useState(lists.map((el) => {
        el.color = colors.filter(color => color.id === el.colorId)[0].name

        return el
    }))
    const [thing, setThing] = useState(tasks)

    const submitHandler = (obj) => {
        setItems(prev => [...prev, obj])
    }

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
                    submitHandler={submitHandler}
                />
            </div>
            <Tasks thing={thing}/>
        </div>
    )
}

export default App;
