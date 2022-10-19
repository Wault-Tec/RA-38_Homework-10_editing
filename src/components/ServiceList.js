import { useDispatch, useSelector } from "react-redux";
import { changeServiceField, editService, removeService } from "../redux/actions/actionCreators";

const ServiceList = () => {
    const items = useSelector(state => state.serviceList);
    const searchText = useSelector(state => state.serviceSearch)
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeService(id))
    }

    const handleEdit = (name, price, id) => {
        dispatch(changeServiceField('name', name))
        dispatch(changeServiceField('price', price))
        dispatch(editService())
        dispatch(removeService(id))
    }

    const filtredItems = items.filter((i) => i.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    return (
        <ul>
            {filtredItems.map(o =>
                <li key={o.id}>
                    {o.name} 
                    {o.price}
                    <div className="btns">
                        <button onClick={() => handleEdit(o.name, o.price, o.id)}>✎</button>
                        <button onClick={() => handleRemove(o.id)}>X</button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default ServiceList