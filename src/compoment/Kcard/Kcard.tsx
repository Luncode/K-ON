import { FC } from "react"
import { IKcard } from "../../IType"
import './Kcard.scss'
const Kcard:FC<IKcard> = (IProps:IKcard) => {
    return(
        <div className="Kcard">
            <div>{IProps.title}</div>
            <div className="Kcard_info">
                <div className="Kcard_Img">
                    <img src={IProps.img} alt="" />
                </div>
                <div>{IProps.context}</div>
            </div>
        </div>
    )
}

export default Kcard