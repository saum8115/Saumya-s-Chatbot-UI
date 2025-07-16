import React, { useContext } from 'react'
import "./chatSection.css"
import Darkmode from '../Dark-mode/Darkmode'
import { TbSend2 } from "react-icons/tb";


export const ChatSection = () => {

  return (
    <div className='chatsection'>
        <div className="topsection">
<div className="heading">
    <span>HELLO SAUMYA</span>
    <span>I'm Your Assistent</span>
    <span>What can I help you? </span>
</div>
        </div>
        <div className="bottomsection">
<input type='text' placeholder='Enter a Prompt'></input>
<button id='sendbtn'><TbSend2 /></button>
<Darkmode/>
        </div>
    </div>
  )
}
