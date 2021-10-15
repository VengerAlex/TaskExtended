import React, {useEffect, useState} from "react";

import List from "./components/List/index";
import AddListBtn from "./components/AddListBtn/AddListBtn";
import { colors} from './db.json'
import Tasks from "./components/Tasks/Tasks";
import axios from "axios";

const App = (props) => {
    const [items, setItems] = useState([])
    const [active, setActive] = useState(1)
    const [activeItem, setActiveItem] = useState([])


    const submitHandler = (obj) => {
        setItems(prev => [...prev, obj])
    }
    const removeItems = (folder) => {
        const folders = items.filter(el => el.id !== folder.id)

        setItems(folders)
    }
    const onEditTitle = (post, newTitle) => {
        const currTitleId = post.id;

        const newList = items.map(el => {
            if(post.id === el.id){
                el.name = newTitle;
            }
            return
        })
        setItems(newList)
    }
    const addTaskToFolder = (task) => {
        console.log(task)

        const helper = items.map(el => el.id === task.id ? task : el)
        console.log(helper)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/lists?_embed=tasks')
            .then(({data}) => setItems(data))
    }, [])
    // console.log(activeItem)

    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <List
                    isRemovable={false}
                    items={[{title: 'All items', icon: '/img/list.svg'}]}
                />
                <List
                    onClickItem={(el) => setActiveItem(el)}
                    activeItem={activeItem}
                    items={items}
                    removeItems={removeItems}
                    isRemovable
                />
                <AddListBtn
                    colors={colors}
                    submitHandler={submitHandler}
                />
            </div>
            {items && <Tasks
                items={activeItem}
                onEditTitle={onEditTitle}
                addTaskToFolder={addTaskToFolder}
            />}
        </div>
    )
}

export default App;
