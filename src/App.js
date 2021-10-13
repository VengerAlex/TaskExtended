import {useState} from "react";

import List from "./components/List/index";
import AddListBtn from "./components/AddListBtn/AddListBtn";
import {lists, colors} from './db.json'

const App = (props) => {
    const [items, setItems] = useState(lists.map((el) => {
                el.color = colors.filter(color => color.id === el.colorId)[0].name

                return el
    })
    )

    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <List
                    items={[{icon: '/img/list.svg', title: 'All Tasks', active: true}]}
                    isRemovable = {false}
                />
                <List
                    items={items}
                    isRemovable
                />
                <AddListBtn
                    colors={colors}
                    setItems={setItems}
                />
            </div>
            <div className="todo__tasks">
                <h1>Todo items</h1>
            </div>
        </div>
    )
}

export default App;
