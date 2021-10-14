import './List.scss'
import ListItem from "./ListItem";
import React, {useState} from "react";
import axios from "axios";


const List = ({onClickItem,items, popupHandeler, removeItems, isRemovable, activeItem}) => {
    const onRemoveFolder = (el) => {
        if(window.confirm('Are you sure you want do delete this item ? ')){
            axios.delete('http://localhost:5000/lists/' + el.id)
                .then(el => removeItems(el))
        }
    }

    console.log(activeItem)
    return (
        <ul
            onClick={popupHandeler}
            className="list"
        >
            {items && items.map(el => (
                <li
                    onClick={onClickItem ? () => onClickItem(el) : null}
                    key={el.title}
                    className={activeItem === el ? 'active' : ''}
                >
                    {isRemovable && <img
                        onClick={() => onRemoveFolder(el)}
                        className='list__close'
                        src='/img/close.svg' alt=""
                    />}
                    {el.icon
                        ? <img className='list__img' src={el.icon} alt="#"/>
                        : <i className='badge' style={{backgroundColor: el.color ? el.color : 'pink'}}></i>
                    }
                    <span className='list__text'>{el.title}</span>
                    {isRemovable && <span className='dot'>{el.tasks ? el.tasks.length : '0'}</span>}
                </li>
            ))}
        </ul>
    );
};

export default List;