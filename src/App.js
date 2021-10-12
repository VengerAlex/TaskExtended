import List from "./components/List/index";

const App = (props) => {
    return (
        <div className='todo'>
            <div className="todo__sidebar">
                <List items={[
                    {
                        icon: '/img/list.svg', title: 'All Tasks', active: true
                    }
                ]}/>
                <List items={[
                    {color: 'green', title: 'Shops'},
                    {color: 'blue', title: 'Frontend'},
                    {color: 'pink', title: 'Films'},
                ]}/>
            </div>
            <div className="todo__tasks">
                <h1>dsad</h1>
            </div>
        </div>
    )
}

export default App;
