import { Button, IconButton, Snackbar, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { ILoginPanel } from "../../IType";
import CloseIcon from '@material-ui/icons/Close';
import './LoginPanel.scss'

const LoginPanel = (IProps:ILoginPanel) => {
    const [mid,setMid] = useState<string>('')
    const [isError,setIsError] = useState<boolean>(false)
    const doLogin = (mid:string) => {
        if(mid !== ''){
            IProps.doLogin(mid)
            localStorage.setItem('mid',mid)
        }else{
            // midRef.current?.focus()
            setIsError(true)
        }
    }
    const handleClose = () => {
        setIsError(false)
      };
 return (
     <div className="LoginPanel">
         <div className="LoginForm">
             <div className="LoginForm_close">
                 <IconButton onClick={()=>{
                     IProps.closePanle()
                 }}>
                     <CloseIcon />
                 </IconButton>
             </div>
             <div className="LoginTitle">登录中心</div>
             <div className="LoginInput">
                 <TextField style={{width:'300px'}} label="MID" variant="outlined" value={mid} onChange={(e) => {
                     setMid(e.target.value)
                 }}/>
             </div>
             <div className="LoginBtnGroup">
                 <Button variant="contained" color="primary" size="large" onClick={()=>{
                     doLogin(mid)
                 }}>登录</Button>
                 <Button variant="contained" color="secondary" size="large" onClick={()=>{
                     setMid('')
                 }}>重置</Button>
             </div>
             <div className="info">
                 该Mid登录信息仅存储到站长服务器提供服务，不会提供给第三方，请放心食用😢😢😢
             </div>
         </div>
         <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={isError}
            onClose={handleClose}
            autoHideDuration={3000}
            message="请输入您B站的MID"
        />
     </div>
 )   
}

export default LoginPanel