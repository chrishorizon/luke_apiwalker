import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {
    const [info, setInfo] = useState({
        category: "people",
        id: 0
    });
    // const [ id, setId ] = useState({

    const history = useHistory();
    
    const submitHandler = (e) =>{
        const data = {...info}
        e.preventDefault();
        data.category === "people" ? history.push(`/people/${info.id}`) : history.push(`/planets/${info.id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="d-flex align-items-center m-3">
                Search for: 
                <select name="category" onChange={e => setInfo({...info, category: e.target.value})} className="btn btn-outline-danger btn-sm mx-3" >
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <input type="number" name="id" onChange={e => setInfo({...info, id: e.target.value})} />
                <button className="btn btn-info btn-sm ms-3">Search</button>
            </form>
        </div>
    )
}

export default Form
