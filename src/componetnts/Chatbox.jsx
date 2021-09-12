import React from 'react';
import "../css/Chatbox.css";
import Menu from './menu/Menu';

const Chatbox = () => {
  return (
    <>


    <div className="main_section">
      <div className="main_left">
        <Menu/>
      </div>

      <div className="main_right">
        i am right 
      </div>
      </div>

    </>
  )
}

export default Chatbox;
