import './Footer.scss'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useState } from 'react';
const Footer = () => {
    const [count, setCount] = useState(0)
    const emo = (count:number) => {
        if(count >= 50 && count <= 100){
            return " （づ￣3￣）づ╭❤️～"
        }else if(count >= 150 && count <= 200){
            return " 谢啦!!☆⌒(*＾-゜)v"
        }else if(count > 201){
            return " ✪ ω ✪"
        }
        return ""
    }
    return (
        <div className="footer">
            <div>( K-ON & 轻音少女 & HTT )</div>
            Copyright By Luncode Thanks your Like
            <IconButton color="secondary" onClick={() => {
                setCount(count + 1)
            }}>
                <FavoriteBorderOutlinedIcon />
            </IconButton>
            <span>{count !== 0 ? `您喜欢了${count}次` : ''}</span>
            <span>{emo(count)}</span>
        </div>
    )
}

export default Footer