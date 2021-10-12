import List from "./components/List/index";
import AddListBtn from "./components/AddListBtn/AddListBtn";
import DB from './db.json'

const App = (props) => {
    console.log(DB)

    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <List
                    items={[{icon: '/img/list.svg', title: 'All Tasks', active: true}]}
                    isRemovable = {false}
                />
                <List
                    items={[
                        {color: 'green', title: 'Shops'},
                        {color: 'blue', title: 'Frontend'},
                        {color: 'pink', title: 'Films'}]}
                    isRemovable
                />
                <AddListBtn data={DB}/>
            </div>
            <div className="todo__tasks">
                <h1>d</h1>
            </div>
        </div>
    )
}

export default App;
