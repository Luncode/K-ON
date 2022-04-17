import { IIconHref } from '../../IType'
import './IconHref.scss'
const IconHref = (IProps: IIconHref) => {
    return (
        <div className="IconHref">
            <a href={IProps.herf} target="_blank" rel="noreferrer">
                <div className='IconHref_icon'>
                    <img src={IProps.iconSrc} alt={IProps.text} />
                </div>
                <div className='IconHref_text'>
                    {IProps.text}
                </div>
            </a>
        </div>
    )
}

export default IconHref