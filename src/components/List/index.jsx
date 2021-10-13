import './List.scss'
import ListItem from "./ListItem";
import React, {useState} from "react";


const List = ({items, popupHandeler, setItems}) => {
    const [active, setActive] = useState(1)

    const removeItems = (folder) => {
        const folders = items.filter(el => el.id !== folder.id)

        setItems(folders)
    }

    return (
        <ul
            onClick={popupHandeler}
            className="list"
        >
            {items && items.map(el => (
                <li
                    onClick={() => setActive(el.id)}
                    key={el.title}
                    className={active === el.id ? 'active' : ''}
                >
                    <img
                        onClick={() => removeItems(el)}
                        className={active === el.id ? 'list__close active' : 'list__close'}
                        src='/img/close.svg' alt=""
                    />

                    {el.icon
                        ? <img className='list__img' src={el.icon} alt="#"/>
                        : <i className='badge' style={{backgroundColor: el.color}}></i>
                    }

                    <span >{el.title}</span>
                </li>
            ))}
        </ul>
    );
};

export default List;