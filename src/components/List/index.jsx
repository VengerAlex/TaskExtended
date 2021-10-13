import './List.scss'
import ListItem from "./ListItem";


const List = ({items, isRemovable, popupHandeler}) => {
    return (
        <ul
            onClick={popupHandeler}
            className="list"
        >
            {items && items.map(el => (
                <ListItem
                    key={el.id}
                    el={el}
                    isRemovable={isRemovable}
                />
            ))}
        </ul>
    );
};

export default List;