import React ,{useState,useContext} from 'react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../css/Header.css';

import { GoogleLogout} from "react-google-login";
import { ClientId } from '../../constant/data';
import { AccountContext } from '../../context/AccountProvider';
// import { Drawer } from '@material-ui/core';
import Drawer from "./InfoDrawer";




const HeaderMenu = () => {
  const [open , setOpen] = useState(false);
  const {setAccount} = useContext(AccountContext)
  const [opendrawer , setOpenDrawer]= useState();


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

  const OpenProfile = () =>{
    setOpenDrawer(true);
  
    
  
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
        <MenuItem onClick={()=>{handleClose();OpenProfile()}}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <GoogleLogout
          clientId={ClientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSucess}
                
             
               
          />
        </MenuItem>
      </Menu>
        <Drawer open={opendrawer} setOpen={setOpenDrawer}/>
     
    </>
  );
}

export default HeaderMenu;
