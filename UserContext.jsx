import React, { useState, createContext } from 'react';
import run from '../gemini'; // make sure path is correct

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("")
const [prevPrompt, setPrevPrompt] = useState([])

function newChat(){
    setShowResult(false)
    setLoading(false)
}


  async function sent(userPrompt) {
   setResultData("")
    setShowResult(true);
    setRecentPrompt(input)
    setLoading(true);
    setPrevPrompt(prev=>[...prev,userPrompt])
    setResultData(""); 

    await run(userPrompt, (chunk) => {
      setResultData(prev => prev + chunk); // stream response into state
    });
    setLoading(false)
     setInput("");

    setLoading(false); // once complete
  }

  const data = {
    input,
    setInput,
    sent,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    newChat
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContext;
