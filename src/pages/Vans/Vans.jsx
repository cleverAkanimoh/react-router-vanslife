import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Vans() {

    const [vansData, setVansData] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    const vanElements = vansData.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    const vanButtons = vansData.map(van => (
        <button key={van.id} className="van-btn">{van.type}</button>
    ))

    return (
        <div className="van-list-container">
            <h2>Explore our vans options</h2>
            <div className="btnContainer">
                {vanButtons}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}