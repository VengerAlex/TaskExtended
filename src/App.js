import React, {useEffect, useState} from "react";
import {Route, Link, useHistory, useLocation} from 'react-router-dom'

import List from "./components/List/index";
import AddListBtn from "./components/AddListBtn/AddListBtn";
import { colors} from './db.json'
import Tasks from "./components/Tasks/Tasks";
import axios from "axios";

const App = (props) => {
    const [items, setItems] = useState([])
    const [activeItem, setActiveItem] = useState(null)
    const history = useHistory()
    const location = useLocation()


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


    const addTaskToFolder = (listId, task) => {

        const newList = items.map(el => {
            if(el.id === listId){
                el.tasks = [...el.tasks, task]
            }
            return el
        })
        setItems(newList)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/lists?_embed=tasks')
            .then(({data}) => setItems(data))
    }, [])

    useEffect(() => {
        const idOfLoc = +(location.pathname.split('lists/')[1])

        if(items){
            const list = items.find(el => el.id === idOfLoc)

            setActiveItem(list)
        }

        // setActiveItem(specObj)
    }, [items, location.pathname])


    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <List
                    onClickItem={(el) => {
                        history.push(`/`)
                    }}
                    isRemovable={false}
                    items={[{title: 'All items', icon: '/img/list.svg'}]}
                    active={true}
                    // onClickItem={el => setActiveItem(el)}
                />
                <List
                    onClickItem={(el) => {
                        history.push(`/lists/${el.id}`)
                    }}
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
            <div className="right-side">
            <Route exact path='/'>
                {items && items.map(el => (
                    <Tasks
                        items={el}
                        onEditTitle={onEditTitle}
                        addTaskToFolder={addTaskToFolder}
                    />
                ))}
            </Route>
            </div>
            <Route path='/lists/:id'>
                {items && <Tasks
                    items={activeItem}
                    onEditTitle={onEditTitle}
                    addTaskToFolder={addTaskToFolder}
                />}
            </Route>
        </div>
    )
}

export default App;
