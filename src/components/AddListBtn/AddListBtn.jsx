import React, {useState} from 'react';

import List from "../List";
import './AddListBtn.scss'

const AddListBtn = ({colors, submitHandler}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [color, setColor] = useState(colors[0])
    const [value, setValue] = useState('')

    const popupHandler = () => {
        setIsOpened(!isOpened)
    }
    const closeHandler = () => {
        setValue('')
        setColor(colors[0])
        setIsOpened(false)
    }
    const addFolder = (e) => {
        e.preventDefault()
        if(value === '') {
            alert('pls name your folder')

            return
        }

        const obj = {
            id: Math.random(),
            title: value,
            color: color.hex,
        }

        submitHandler(obj)

        setValue('')
        setIsOpened(false)
        setColor(colors[0])
    }

    return (
        <div className='popup'>
            <List
                popupHandeler={popupHandler}
                items={[{icon: 'img/add.svg', title: 'Add List'}]}
                isRemovable={false}
            />
            {isOpened && <div className='popup__list'>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Title of your folder'
                    className='input'
                    type='text'
                />
                <button
                    onClick={closeHandler}
                    className=" popup__close">
                    <img src="img/close.svg" alt="close btn"/>
                </button>
                {colors.map(el => (
                    <span
                        onClick={() => setColor(el)}
                        key={el.id}
                        className={color === el ? 'popup__circle active' : 'popup__circle'}
                        style={{backgroundColor: el.hex}}
                    ></span>
                ))}
                <button
                    onClick={addFolder}
                    className='btn-default popup__btn'
                >
                    Add New Folder
                </button>
            </div>}
        </div>

    );
};

export default AddListBtn;