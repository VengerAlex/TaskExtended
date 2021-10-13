import React from 'react';

const ListItem = ({title, icon, color}) => {


    return (
        <li key={title} className='active'>

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