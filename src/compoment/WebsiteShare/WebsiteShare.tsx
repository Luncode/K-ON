import IconHref from '../IconHref/IconHref'
import './WebsiteShare.scss'
import bilibili from '../../assets/icon/bilibili.jpg'
import acfun from '../../assets/icon/acfun.jpg'
import netease from '../../assets/icon/netease.jpg'
import pixiv from '../../assets/icon/pixiv.jpg'
import steam from '../../assets/icon/steam.jpg'
import moegirl from '../../assets/icon/moegirl.jpg'
import { IIconHrefList } from '../../IType'
const WebsiteShare = () => {
    const HrefList:IIconHrefList = {
        List:[
            {
                iconSrc:bilibili,
                text:'bilibili',
                herf:'https://www.bilibili.com'
            },
            {
                iconSrc:acfun,
                text:'acfun',
                herf:'https://www.acfun.cn/'
            },
            {
                iconSrc:netease,
                text:'netease',
                herf:'https://music.163.com/'
            },
            {
                iconSrc:pixiv,
                text:'pixiv',
                herf:'https://www.pixiv.net'
            },
            {
                iconSrc:steam,
                text:'steam',
                herf:'https://store.steampowered.com/'
            },
            {
                iconSrc:moegirl,
                text:'moegirl',
                herf:'https://zh.moegirl.org.cn/Mainpage'
            },
        ]
    }
    return (
        <div className="WebsiteShare">
            {
                HrefList.List.map(item => {
                    return (
                        <IconHref key={item.text} iconSrc={item.iconSrc} text={item.text} herf={item.herf} />
                    )
                })
            }
            <></>
        </div>
    )
}

export default WebsiteShare