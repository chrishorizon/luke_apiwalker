import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const People = () => {

    const history = useHistory();

    const [people, setPeople] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPeople(true)
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                setLoading(false)
                setPeople(res.data)})
            .catch(err => history.push("/error"))
    }, [id])

    if (loading) return "Loading..."

    return (
        <div className="ms-3">
            <h2>{people.name}</h2>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color} </p>
            <p>Birth Year: {people.birth_year} </p>
        </div>
    )
}

export default People
