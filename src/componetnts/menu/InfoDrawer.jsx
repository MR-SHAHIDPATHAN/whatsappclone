import { Drawer } from '@material-ui/core'
import React, {useContext} from 'react'
import "../../css/Header.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import { AccountContext } from '../../context/AccountProvider';






const InfoDrawer = ({ open, setOpen }) => {

  const {account} = useContext(AccountContext);


  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>

      <Drawer
        open={open}
        onClose={handleClose}

      >
        <div className="parent">
          <ArrowBackIcon onClick={handleClose} className="Arrow_icon" />
          <h3>Profile</h3>

        </div>

        <div className="avatar_displayProfile">
          <Avatar alt="Remy Sharp"
            src={account.imageUrl}
            className="avatar_logo"
            style={{ height: '200px', width: '200px' }}

          />


        </div>
        <div className="profile_name">
          <p>Your Name</p>
          <h4>Shahid Pathan</h4>
        </div>

        <div className="profile_note">
        <p>
          This is note your username or pin . This name will be visible to your 
          WhatsApp contacts.
        </p>
        </div>

        <div className="about_profile">
          <p>About</p>
          <h4>Web Developer</h4>
        </div>

      </Drawer>

    </>
  )
}

export default InfoDrawer;
