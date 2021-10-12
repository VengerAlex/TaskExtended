import  './List.scss'
import ListItem from "./ListItem";


const List = ({items, isRemovable, popupHandeler}) => {
    return (
        <ul
            onClick={popupHandeler}
            className="list">
            {items.map(el => (
                <ListItem el={el} isRemovable={isRemovable}/>
            ))}
        </ul>
    );
};

export default List;