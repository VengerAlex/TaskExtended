import React from 'react';

const ListItem = (props) => {
    return (
        <li key={props.el.title} className={props.el.active ? 'active' : ''}>
            <img className='list__close' src={props.isRemovable ? '/img/close.svg' : ''} alt=""/>
            {props.el.icon
                ? <img className='list__img' src={props.el.icon} alt="#"/>
                : <i className='badge' style={{backgroundColor: props.el.color}}></i>
            }
            <span >{props.el.title}</span>
        </li>
    );
};

export default ListItem;