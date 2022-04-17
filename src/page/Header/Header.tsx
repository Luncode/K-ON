import { useEffect, useState } from "react"
import Banner from "../../compoment/Banner/Banner"
import Menu from "../../compoment/Menu/Menu"
import MeunItem from "../../compoment/MeunItem/MeunItem"
import UserCard from "../../compoment/UserCard/UserCard"
import face from '../../assets/face.jpg'
import BannerImg from '../../assets/banner.png'
import './Header.scss'
import request from "../../config/Http"
import LoginPanel from "../../compoment/LoginPanel/LoginPanel"
import { IBilibiliBase, IBilibiliInfo } from "../../IType"
const Header = () => {
    const [isLogin,setLogin] = useState<boolean>(false)
    const [isLoginPanel,setIsLoginPanel] = useState<boolean>(false)
    const [switchBanner,setSwitchBanner] = useState<boolean>(false)
    const [userInfo,setUserinfo] = useState<IBilibiliInfo>({
        mid: 0,
        name: '',
        sex: '',
        face: '',
        level:0,
        sign:'',
        top_photo:''
    })
    useEffect(()=>{
        if(localStorage.getItem('mid')){
            doLogin(localStorage.getItem('mid') || '')
        }
    },[])
    //22753506
    const doLogin= (usermid:string) => {
        request<IBilibiliBase>("bilibili/x/space/acc/info?mid="+usermid,'GET',{}).then(res => {
            setUserinfo(res.data)
            setLogin(true)
            setIsLoginPanel(false)
        }).catch(error => {
            localStorage.removeItem('mid')
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        })
    }
    return (
        <div className="header">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Menu>
                    <MeunItem text="K-ON" />
                    <MeunItem text="图片分享" />
                    <MeunItem text="视频分享" />
                    <MeunItem text="收录" />
                    <MeunItem text="关于作者" />
                    <MeunItem text="留言板" />
                    <MeunItem click={()=>{
                        setSwitchBanner(!switchBanner)
                        // localStorage.setItem('switchBanner',"" + switchBanner)
                    }} text="切换banner" />
                    {
                        isLogin ? (
                            <UserCard face={userInfo.face} username={userInfo.name} mid={userInfo.mid}/>
                        ):(
                            <div style={{display: 'flex',position:'absolute',right:'50px'}}>
                                <MeunItem text="登录" click={()=>{
                                    setIsLoginPanel(true)
                                }} />
                                {/* <MeunItem text="注册" /> */}
                            </div>
                        )
                    }
                    
                </Menu>
                
            </div>
            {
                switchBanner ? (
                    <Banner src={require('../../assets/bg.mp4')} isVedio={true} bannerClick={()=>{
                        alert('dev')
                    }}/>
                ):(
                    <Banner src={userInfo.top_photo!=='' ? userInfo.top_photo:BannerImg} isVedio={false} />
                )
            }
            {
                isLoginPanel && (
                    <LoginPanel doLogin={(e)=>{
                        doLogin(e)
                        // alert(e)
                    }} closePanle={()=>{
                        setIsLoginPanel(false)
                    }}/>
                )
            }
        </div>
    )
}

export default Header