import { useEffect, useState } from "react";
import request from "../../config/Http";
import { IOneTalk } from "../../IType";
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import './OneTalk.scss'

const OneTalk = () => {
    const [oneTalkInfo,setOneTalkInfo] = useState<IOneTalk>({})
    const LoadOneTalk = () => {
        request<IOneTalk>('/oneTalk?c=b','GET',{}).then((res) => {
            setOneTalkInfo(res || {})
            // console.log(oneTalkInfo);
        })
    }
    useEffect(()=>{
        LoadOneTalk()
    },[])
    return (
        <div className="oneTalk">
            <div className="checkOut">
                <IconButton title="换一个" onClick={()=>{
                    LoadOneTalk()
                }}>
                    <RefreshIcon style={{color:'#fff'}}/>
                </IconButton>
            </div>
            <div className="oneTalkText">
            『 {oneTalkInfo.hitokoto ?? '加载中...'} 』
            </div>
            <div className="oneTalkForm">
                {
                    "——"+oneTalkInfo.from
                }
            </div>
            <div>
                数据来源：一言
            </div>
        </div>
    )
}

export default OneTalk;