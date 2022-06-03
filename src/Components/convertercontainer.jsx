import React, {useEffect, useState} from "react";
import currencyUrl from "../Endpoint/EndpointCurrency";
import PropTypes from 'prop-types'
import axios from "axios";
import Convertercomponent from "./convertercomponent";
function Convertercontainer(props){
    const [onecurrency, setOnecurrency]=useState(1)
    const [twocurrency, setTwocurrency]=useState(1)
    const [textCurrencyOne,setTextCurrencyOne]=useState('USD')
    const [textCurrencyTwo,setTextCurrencyTwo]=useState('UAH')
    const [items,setItems]=useState([])
    const [isLoaded,setIsLoaded]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        axios.get(currencyUrl)
            .then(response=>{
                setItems(response.data.rates)
                setIsLoaded(true)
            })
    },[])
    useEffect(()=>{
        if(!!items){
            multipl(1)
        }
    },[items])
    function form(number){
        return number.toFixed((2))
    }
    function multipl(onecurrency){
        setTwocurrency(form(onecurrency*items[textCurrencyTwo]/items[textCurrencyOne]))
        setOnecurrency(onecurrency)
    }
    function rezultchanget(textCurrencyOne){
        setTwocurrency(form(onecurrency*items[textCurrencyTwo]/items[textCurrencyOne]))
        setTextCurrencyOne(textCurrencyOne)
    }
    function multipltwo(twocurrency){
        setOnecurrency(form(twocurrency*items[textCurrencyOne]/items[textCurrencyTwo]))
        setTwocurrency(twocurrency)
    }
    function rezultchangetTwo(textCurrencyTwo){
        setOnecurrency(form(twocurrency*items[textCurrencyOne]/items[textCurrencyTwo]))
        setTextCurrencyTwo(textCurrencyTwo)
    }

    if(error){
        return <div>Error</div>
    }else if (!isLoaded){
        return <div>Loaded</div>
    }else {
        return (
            <div>
                <h1>Public API converter currency</h1>
                <div>
                    <Convertercomponent onecurrency={onecurrency} multipl={multipl} rezultchanget={rezultchanget}
                    currency={Object.keys(items)} multipltwo={multipltwo} rezultchangetTwo={rezultchangetTwo}
                    textCurrencyOne={textCurrencyOne} textCurrencyTwo={textCurrencyTwo} twocurrency={twocurrency}/>
                </div>
            </div>
        )
    }
}
Convertercontainer.protoTypes={
    textCurrencyOne:PropTypes.string.isRequired,
    curr:PropTypes.string.isRequired,
    rezultchanget:PropTypes.func,
    textCurrencyTwo:PropTypes.string.isRequired
}
export default Convertercontainer