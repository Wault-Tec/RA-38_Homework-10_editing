import { useDispatch, useSelector } from "react-redux";
import { searchService } from "../redux/actions/actionCreators";

const ServiceSearch = () => {
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.serviceSearch)

    const handleChage = (e) => {
        const {value} = e.target;
        dispatch(searchService(value))
    }

    return (
        <input type="search" onChange={handleChage} value={searchText} placeholder="Поиск по названию" />
    )
}

export default ServiceSearch