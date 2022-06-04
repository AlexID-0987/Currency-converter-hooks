import React from "react";
import Privatcurrencywatch from "./privatcurrencywatch";
import Convertercontainer from "./convertercontainer";
function Apicurrencywatch(props){
    console.log(`I props ${props.state}`)
    return(
        <div>
            <Privatcurrencywatch endpoint={props.endp}/>
            <Convertercontainer endpoinConverter={props.endpointConverter}/>
        </div>
    )
}
export default Apicurrencywatch