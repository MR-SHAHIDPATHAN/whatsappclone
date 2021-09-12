import { Drawer } from '@material-ui/core'
import React from 'react'
import "../../css/Header.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';







const InfoDrawer = ({open , setOpen}) => {


const handleClose =()=>{
  setOpen(false)
}

  return (
    <>
      
    <Drawer
    open={open}
    onClose = {handleClose}
    
    >
        <div className="parent">
      <ArrowBackIcon onClick={handleClose} className="Arrow_icon" />
       <h3>Profile</h3>

      </div>

        <div className="avatar_displayProfile">
        <Avatar alt="Remy Sharp"
        src="/static/images/avatar/1.jpg" 
        className="avatar_logo"

        />


        </div>


    </Drawer>

    </>
  )
}

export default InfoDrawer;
