import React,{useState,useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import HeaderMenu from './HeaderMenu';

import "../../css/Header.css";

import {AccountContext } from '../../context/AccountProvider';

import Drawer from "./InfoDrawer";


const Header = () => {

  const {account} = useContext(AccountContext);

  const[ open ,setOpen] = useState(false);


const OpenProfile = () =>{
  setOpen(true);

  

}


  return (
<>


      {/* // Drawer section start  */}

     


    <div className="main_section">
      <div className="logo">
      <Avatar alt="Remy Sharp"   onClick={()=>OpenProfile()}  src={account.imageUrl} />
      </div>


      
      {/* // Drawer section start  */}

      <Drawer open={open} setOpen={setOpen}>



      </Drawer>

      





      <div className="right_section">
        <DonutLargeIcon className="right_icon"/>
        <ChatIcon className="right_icon"/>
        <HeaderMenu/>
        

      </div>
    </div>
    </>
  )
}

export default Header;
