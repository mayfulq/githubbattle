import React from 'react';
import 
{ 
  NavLink
}   from 'react-router-dom'
function Nav(){
  return(
      <ul className="nav">
         <li><NavLink exact activeClassName='active' to='/githubbattle/dist/'>Home</NavLink></li>
         <li><NavLink activeClassName='active' to='/githubbattle/dist/battle'>Battle</NavLink></li>
         <li><NavLink activeClassName='active' to='/githubbattle/dist/popular'>Popular</NavLink></li>
      </ul>
  )
}

export default Nav;