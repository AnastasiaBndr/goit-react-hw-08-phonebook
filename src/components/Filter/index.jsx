
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';


const Filter = () => {

    const dispatch = useDispatch();

    const handleFilterValue = (e) => {
        dispatch(setFilter(e.currentTarget.value))
    }
    return (<div className={css.filter_container}>
        <div><h3>Filter</h3>
            <input type="text" name="filter" onChange={handleFilterValue} />
        </div></div>)
}

export default Filter;