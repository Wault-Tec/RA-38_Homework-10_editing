import { useDispatch, useSelector } from "react-redux"
import { addService, changeServiceField, editService } from "../redux/actions/actionCreators";

const ServiceAdd = () => {
    const item = useSelector(state => state.serviceAdd)
    const isEdit = useSelector(state => state.serviceEdit)
    const dispatch = useDispatch();

    const clearInput = () => {
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addService(item.name, item.price))
        if(isEdit) {
            dispatch(editService());
        }
        clearInput();
    }

    const handleCancel = () => {
        dispatch(addService(item.name, item.price))
        clearInput();
        dispatch(editService())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} required />
            <input name='price' type="number" onChange={handleChange} value={item.price} required />
            <button type='submit'>Save</button>
            {isEdit && 
                <button onClick={handleCancel}>Cancel</button>
            }
        </form>
    );
}

export default ServiceAdd