import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function VanDetail() {

    const params = useParams()

    const [vansData, setVansData] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {vansData ? (
                <div className="van-detail">
                    <img src={vansData.imageUrl} />
                    <i className={`van-type ${vansData.type} selected`}>{vansData.type}</i>
                    <h2>{vansData.name}</h2>
                    <p className="van-price"><span>${vansData.price}</span>/day</p>
                    <p>{vansData.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}