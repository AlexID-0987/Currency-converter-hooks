import React from "react";
import converter from "../Style/converterComponent.module.css";
function ConvertercomponenTwo(props){
    return(
        <div className={converter.container}>
            <div className={converter.poletwo}>
                <input className="input-group mb2" type='text' value={props.twocurrency} onChange={event=>props.multipltwo(event.target.value)}/>
                <select className="form-select"  value={props.textCurrencyTwo} onChange={event=>props.rezultchangetTwo(event.target.value)}>
                    {
                        props.currency.map((curr=>(
                            <option value={curr}>{curr}</option>
                        )))
                    }
                </select>
            </div>
        </div>
    )
}
export default ConvertercomponenTwo