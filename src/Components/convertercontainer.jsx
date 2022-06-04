import React, {useEffect, useState} from "react";
import currencyUrl from "../Endpoint/EndpointCurrency";
import axios from "axios";
import Convertercomponent from "./convertercomponent";
import ConvertercomponenTwo from "./convertercomponenTwo";
function Convertercontainer(props){
    const [onecurrency, setOnecurrency]=useState(1)
    const [twocurrency, setTwocurrency]=useState(1)
    const [textCurrencyOne,setTextCurrencyOne]=useState('USD')
    const [textCurrencyTwo,setTextCurrencyTwo]=useState('UAH')
    const [items,setItems]=useState([])
    const [isLoaded,setIsLoaded]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        axios.get(props.endpoinConverter)
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
                                        currency={Object.keys(items)}
                                        textCurrencyOne={textCurrencyOne}/>
                    <ConvertercomponenTwo twocurrency={twocurrency} multipltwo={multipltwo}
                                          textCurrencyTwo={textCurrencyTwo}
                                          rezultchangetTwo={rezultchangetTwo} currency={Object.keys(items)}/>
                </div>
            </div>
        )
    }
}

export default Convertercontainer