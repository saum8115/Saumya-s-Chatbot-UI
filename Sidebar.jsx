import React,{ useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"




const Sidebar = () => {

    const [extend, setExtend] = useState(false)
  return (
    <div className='sidebar'>
<GiHamburgerMenu id='ham' onClick={()=>{
    setExtend(prev=>!prev)
    
    
}}/>
<div className="newchat">
<FaPlus />
{extend?<p>New Chat</p> :""}
</div>
<div className="recent">
    <FaRegMessage />
    {extend?<p>Who are you</p> :""}
    </div>

    </div>

  )
}

export default Sidebar