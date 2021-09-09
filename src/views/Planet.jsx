import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';

const Planet = () => {

    const history = useHistory();

    const [planet, setPlanet] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res => {
            setLoading(false)
            setPlanet(res.data)})
        .catch(err => history.push("/error"))
    }, [id])

    if (loading) return("Loading...");

    return (
        <div>
            <h2>{planet.name}</h2>
            <p>Orbital Period: {planet.orbital_period} </p>
            <p>Climate: {planet.climate} </p>
            <p>Gravity: {planet.gravity} </p>
            <p>Population: {planet.population} </p>
        </div>
    )
}

export default Planet
