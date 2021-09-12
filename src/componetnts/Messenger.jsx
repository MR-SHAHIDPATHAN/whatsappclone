import React,{useContext} from 'react';
import Login from '../account/Login';
import { AccountContext } from '../context/AccountProvider';
import Chatbox from './Chatbox';






const Messenger = () => {
  const {account} = useContext(AccountContext);
  return (
    <>

       { account ? <Chatbox/> : <Login/> }
    </>
  )
}

export default Messenger;


