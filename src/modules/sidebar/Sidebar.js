import React, { Component } from 'react';
import './Sidebar.css';
import Chat from './components/chat/Chat';

class Sidebar extends Component {
   render() {
      return (
         <div className="sidebar-scroll">
            <Chat/>
         </div>
      );
   }
}

export default Sidebar;