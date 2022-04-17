import { IUserCard } from "../../IType"
import './UserCard.scss'

const UserCard = (IProps: IUserCard) => {
    return (
        <div className="userFace" style={{ position: 'absolute', right: '50px' }}>
            <a href={"https://space.bilibili.com/" + IProps.mid} target="_blank" rel="noreferrer" ><img src={IProps.face} alt="" /></a>
            <div className="userPanle">
                <div className="userName">
                    <span>{IProps.username}</span>
                </div>
                <div className="userCtr">
                    <a href={`https://space.bilibili.com/${IProps.mid}/favlist`} target="_blank" rel="noreferrer" ><div className="Ctr_btn">收藏</div></a>
                    <div className="Ctr_btn">投稿</div>
                </div>
                <div style={{textAlign:'center',marginTop:'-5px'}}>美好的一天开始了吗(●'◡'●)</div>
                <div className="loginOut" onClick={()=>{
                    localStorage.removeItem('mid')
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                }}>退出登录</div>
            </div>
        </div>
    )
}

export default UserCard