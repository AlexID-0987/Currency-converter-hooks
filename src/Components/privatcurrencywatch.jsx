import React from "react";
import {useEffect,useState} from "react";
import privat from '../Style/privatstyle.module.css'
function Privatcurrencywatch(props){
    const [error, setError] =useState(null)
    const [isLoader, setIsloaded]=useState(false)
    const [currencys,setCurrency]=useState([])
    useEffect(()=>{
        fetch(props.endpoint)
            .then(money=>money.json())
            .then((result)=>{
            setIsloaded(true)
                setCurrency(result)
                console.log(result)
        },
                (error)=>{
                setIsloaded(true)
                    setError(error)
                }   )


    },[])

if(error){
    return <div>Ups! Error</div>
}
else if(!isLoader){
    return <div>Load data now time!</div>
}else {
    return (
        <div>
            <h1>Privatbank currency</h1>
            <div className={privat.global}>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ccy</th>
                        <th>base_ccy</th>
                        <th>buy</th>
                        <th>sale</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencys.map(currency => (
                        <tr key={currency.buy}>
                            <td>{currency.ccy}</td>
                            <td>{currency.base_ccy}</td>
                            <td>{currency.buy}</td>
                            <td>{currency.sale}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

}
export default Privatcurrencywatch