import { IMeunItem } from "../../IType"
import './MenuItem.scss'
const MeunItem = (IProps:IMeunItem)=> {
    return (
        <div className="menuItem" onClick={IProps.click}>
            {IProps.text}
        </div>
    )
}

export default MeunItem