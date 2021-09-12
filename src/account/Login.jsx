import React,{useContext} from 'react'
import "../css/login.css";
import Checkbox from '@material-ui/core/Checkbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import WhastApp from "../images/WhatsApp.png";
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
import { ClientId } from '../constant/data';




const qrcodeurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";


const Login = () => {

const {account ,setAccount } = useContext(AccountContext);

const onLoginSucess = (res)=>{
  console.log(res.profileObj);
  setAccount(res.profileObj);
  
}

const onLoginFailure = ()=>{
  console.log("fail");

}

  return (
    <div className="Main_Header">

      <div className="Top_div">
      <div className="WhatsApp_icon">
      <img src={WhastApp} alt="WhatsApp" />
        <h4>WhatsApp Web</h4>
        </div>
      </div>
      
      <div className="middle_div">
        <div className="middle_sectin">

          {/* test side */}
          <div className="middle_div_section">
          <div className="test_div">
            <p>To use WhatsApp on your Computer: </p>
            <ul>
              <li>Open WhatsApp on Your Phone</li>
              <li>Tap Menu <MoreVertIcon/>  or <span> setting</span> <SettingsIcon/> and select <span>Linked Device</span></li>
              <li>Point Your Phone to this  screen to capture the code</li>
            </ul>

          </div>
          



          {/* qr div */}
          <div className="qrlogo">
            <img src={qrcodeurl} alt="qrcode" />
              <div className="logingoogleicon"> 
                <GoogleLogin
                clientId={ClientId}
                buttonText="Login"
                isSignedIn={true}
                onSuccess={onLoginSucess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
            />
            </div> 


          </div>
          </div>
       

                {/* button and checkbod here  */}
                <div className="center_sectin">
                  <a href="#">Need help to get started?</a>
                  <div className="checkbox_div">
                  <span><Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                  </span>
                 <p> Keep me signed in</p>
                  </div>


                </div>

          {/* video section here  */}
          <div className="video_section">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jdXwzneFBBU"></iframe>
              
          </div>


          </div>


      </div>




    </div>
  )
}

export default Login;