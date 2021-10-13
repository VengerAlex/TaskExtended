import React from 'react';

const ListItem = ({title, icon, color, active}) => {


    return (
        <li key={title} className='active'>
            {/*<img className='list__close' src={props.isRemovable ? '/img/close.svg' : ''} alt=""/>*/}

            {icon
                ? <img className='list__img' src={icon} alt="#"/>
                : <i className='badge' style={{backgroundColor: color}}></i>
            }

            <span >{title}</span>
        </li>
    );
};

export default ListItem;

// className={props.el.active ? 'active' : ''}