import { IBanner } from "../../IType"
import './Banner.scss'
const Banner = (IProps: IBanner) => {
    return (
        <div className="banner" onClick={IProps.bannerClick}>
            {
                IProps.isVedio ? (
                    <video autoPlay muted={true} src={IProps.src}  loop={true} />
                ) : (
                    <img className="BannerImg" src={IProps.src} alt="Banner" />
                )
            }
        </div>
    )
}

export default Banner