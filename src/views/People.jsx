import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const People = () => {

    const history = useHistory();

    const [people, setPeople] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => setPeople(res.data))
            .catch(err => history.push("/error"))
    }, [id])

    return (
        <div>
            <h2>{people.name}</h2>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color} </p>
            <p>Birth Year: {people.birth_year} </p>
        </div>
    )
}

export default People
