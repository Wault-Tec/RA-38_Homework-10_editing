import { useDispatch, useSelector } from "react-redux";
import { changeServiceField, editService, removeService } from "../redux/actions/actionCreators";

const ServiceList = () => {
    const items = useSelector(state => state.serviceList);
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

    return (
        <ul>
            {items.map(o =>
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