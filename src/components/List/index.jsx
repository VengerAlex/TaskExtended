import  './List.scss'

const List = ({items}) => {
    return (
        <ul className="list">
            {items.map(el => (
                <li className={el.active ? 'active' : ''}>
                    {el.icon ? <img className='list__img' src={el.icon} alt="#"/> : <i className={`badge badge--${el.color}`}></i>}
                    <span>{el.title}</span>
                </li>
            ))}
        </ul>
    );
};

export default List;