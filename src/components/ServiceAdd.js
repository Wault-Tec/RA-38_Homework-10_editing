import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addService, editService, changeServiceField } from "../redux/actions/actionCreators";

const ServiceAdd = () => {
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const item = useSelector(state => state.serviceAdd)
    const isEdit = useSelector(state => state.serviceEdit)
    const dispatch = useDispatch();

    useEffect(() => {
        setItemName(item.name)
        setItemPrice(item.price)
    },[item])

    const clearInput = () => {
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        name === 'name' ? setItemName(value) : setItemPrice(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addService(itemName, itemPrice))
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
            <input name='name' onChange={handleChange} value={itemName} required placeholder="Название услуги"/>
            <input name='price' type="number" onChange={handleChange} value={itemPrice} required placeholder="Стоимость услуги"/>
            <button type='submit'>Save</button>
            {isEdit && 
                <button onClick={handleCancel}>Cancel</button>
            }
        </form>
    );
}

export default ServiceAdd