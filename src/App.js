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
    const [active, setActive] = useState(1)

    const submitHandler = (obj) => {
        setItems(prev => [...prev, obj])
    }
    const removeItems = (folder) => {
        const folders = items.filter(el => el.id !== folder.id)

        setItems(folders)
    }
    const todoAddHandler = post => {
        setThing(prev => [...prev, post])
    }

    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <List
                    isRemovable={false}
                    items={[{title: 'All items', icon: '/img/list.svg'}]}
                />
                <List
                    active={active}
                    setActive={(el) => setActive(el)}
                    items={items}
                    removeItems={removeItems}
                    isRemovable
                />
                <AddListBtn
                    colors={colors}
                    submitHandler={submitHandler}
                />
            </div>
            <Tasks
                todoAddHandler={todoAddHandler}
                color={active.color}
                title={active.title}
                thing={thing}/>
        </div>
    )
}

export default App;
