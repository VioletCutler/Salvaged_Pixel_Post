import React, { useState } from "react";
import { Navbar, Videos, Homepage, Footer, Toolbar, Welcome } from "./";
import { Routes, Route } from "react-router-dom";
import '../stylesheets/index.css'

const Main = () => {
  const [toolBarVisibility, setToolBarVisibility] = useState(false);

  const pixelPostString = [`P`, `I`, `X`, `3`, `L`, `P`, `0`, `S`, `T`]
  const textToUse = []
    function populateTextToUse(){
      for (let i = 0; i < pixelPostString.length; i++){
   
        textToUse.push(pixelPostString[i])
      }
    }
    function generateText(num){
      for (let i = 0; i < num; i++){
        populateTextToUse()
      }
    }

    function generateRandomColorClass(){
      let randomNum = Math.floor(Math.random() * 8)
      return `pixel-post-character letter-style-${randomNum}`
    }

    function changeToolBarDisplay() {
      console.log('Change Tool Bar Display :', !toolBarVisibility)
      setToolBarVisibility(!toolBarVisibility);
    }

  return (
    <div id="main">
      <Navbar />
      <div id="routes">
        <Routes>
          <Route path="/welcome" element={<Welcome generateText={generateText} generateRandomColorClass={generateRandomColorClass}/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      {toolBarVisibility ? <Toolbar changeToolBarDisplay={changeToolBarDisplay}/> : null}
      <Footer
        toolBarVisibility={toolBarVisibility}
        setToolBarVisibility={setToolBarVisibility}
        changeToolBarDisplay={
          changeToolBarDisplay
        }
      />
    </div>
  );
};

export default Main;
