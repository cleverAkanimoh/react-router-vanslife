import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";


export default function () {

    const [vansData, setVansData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    console.log(typeFilter);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vansData.filter(van => van.type.toLowerCase() === typeFilter)
        : vansData

    const vanElements = displayedVans.map(van => (
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

    // for link

    function genNewSearchParamString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
          sp.delete(key)
        } else {
          sp.set(key, value)
        }
        return `?${sp.toString()}`
      }
      console.log(genNewSearchParamString('type', 'value'));

    //   for button
      function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      }

      console.log(handleFilterChange('type', 'value'));

    return (
        <div className="van-list-container">
            <h2>Explore our vans options</h2>
            <div className="van-list-filter-buttons">
                {/* <button
                    className="van-type simple"
                    onClick={() => setSearchParams("type=simple")}>simple</button>
                
                <button
                    className="van-type luxury"
                    onClick={() => setSearchParams("type=luxury")}>luxury</button>
                
                <button
                    className="van-type rugged"
                    onClick={() => setSearchParams("type=rugged")}>rugged</button>
                
                <button
                    className="van-type clear-filters"
                    onClick={() => setSearchParams("")}>Clear</button> */}

                <button 
                    className="van-type simple"
                    onClick={() => setSearchParams({ type: "simple" })}>simple</button>
                <button 
                    className="van-type luxury"
                    onClick={() => setSearchParams({ type: "luxury" })}>luxury</button>
                <button 
                    className="van-type rugged"
                    onClick={() => setSearchParams({ type: "rugged" })}>rugged</button>
                <button 
                    className="van-type clear-filters"
                    onClick={() => setSearchParams({})}>Clear</button>

                {/* <Link
                    to="?type=simple"
                    className="van-type simple"
                >Simple</Link>
                <Link
                    to="?type=luxury"
                    className="van-type luxury"
                >Luxury</Link>
                <Link
                    to="?type=rugged"
                    className="van-type rugged"
                >Rugged</Link>
                <Link
                    to="?"
                    className="van-type clear-filters"
                >Clear filter</Link> */}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}