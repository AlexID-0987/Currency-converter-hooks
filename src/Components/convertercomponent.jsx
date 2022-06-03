import converter from '../Style/converterComponent.module.css'
import  '../Style/Converterstyle.css'

function Convertercomponent(props){

        return (
            <div className={converter.container}>
                <div className={converter.poleone}>
                   <input className="input-group mb2" type='text' value={props.onecurrency} onChange={event=>props.multipl(event.target.value)}/>
                   <select className="form-select" value={props.textCurrencyOne} onChange={event=>props.rezultchanget(event.target.value)}>
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

export default Convertercomponent