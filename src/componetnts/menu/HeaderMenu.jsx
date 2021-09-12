import React ,{useState,useContext} from 'react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../css/Header.css';

import { GoogleLogout} from "react-google-login";
import { ClientId } from '../../constant/data';
import { AccountContext } from '../../context/AccountProvider';



const HeaderMenu = () => {
  const [open , setOpen] = useState(false);
  const {setAccount} = useContext(AccountContext)


  const handleClose = ()=>{
    setOpen(false)

  }


  const handleClick = (e) =>{
    setOpen(e.currentTarget);
    console.clear();


  }

  const onLogoutSucess =()=>{
    alert("Logout SuccessFully")
    setAccount('')

    
  
  }
  return (
    <>
       <MoreVertIcon className="right_icon"
         onClick={handleClick}
       />
       <Menu
        
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical:"bottom",
          horizontal:"center",
          
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right",

        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <GoogleLogout
          clientId={ClientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSucess}
                
             
               
          />
        </MenuItem>
        
      </Menu>
    </>
  )
}

export default HeaderMenu
