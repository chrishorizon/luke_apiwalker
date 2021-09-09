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
            <form onSubmit={submitHandler}>
                Search for: 
                <select name="category" onChange={e => setInfo({...info, category: e.target.value})} >
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <input type="number" name="id" onChange={e => setInfo({...info, id: e.target.value})} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form
