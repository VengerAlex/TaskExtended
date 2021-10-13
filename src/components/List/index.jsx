import './List.scss'
import ListItem from "./ListItem";
import React, {useState} from "react";


const List = ({items, popupHandeler, removeItems, isRemovable, setActive, active}) => {
    const onRemoveFolder = (el) => {
        if(window.confirm('Are you sure you want do delete this item ? ')){
            removeItems(el)
        }
    }


    return (
        <ul
            onClick={popupHandeler}
            className="list"
        >
            {items && items.map(el => (
                <li
                    onClick={() => setActive(el)}
                    key={el.title}
                    className={active === el.id ? 'active' : ''}
                >
                    {isRemovable && <img
                        onClick={() => onRemoveFolder(el)}
                        className='list__close'
                        src='/img/close.svg' alt=""
                    />}

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