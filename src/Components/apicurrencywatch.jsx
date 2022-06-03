import React from "react";
import Privatcurrencywatch from "./privatcurrencywatch";
import Convertercomponent from "./convertercomponent";
import Convertercontainer from "./convertercontainer";
function Apicurrencywatch(props){
    console.log(`I props ${props.state}`)
    return(
        <div>
            <Privatcurrencywatch endpoint={props.endp}/>
            <Convertercontainer/>
        </div>
    )
}
export default Apicurrencywatch