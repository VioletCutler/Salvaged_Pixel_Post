import './Welcome.css'

const Welcome = () => {
    const pixelPostString = [`P`, `I`, `X`, `3`, `L`, `P`, `0`, `S`, `T`]
  const textToUse = []
    function populateTextToUse(){
      for (let i = 0; i < pixelPostString.length; i++){
   
        textToUse.push(pixelPostString[i])
      }
    }
    function generateText(){
      for (let i = 0; i < 100; i++){
        populateTextToUse()
      }
    }
    generateText()
    function generateRandomColorClass(){
      let randomNum = Math.ceil(Math.random() * 7)
      return `pixel-post-character letter-style-${randomNum}`
    }
    console.log(generateRandomColorClass())
  return (
    <div id="welcome-page">
      {
        textToUse.map((character, idx)=> {
          return(
            <p key={idx}className={generateRandomColorClass()}>{character}</p>
          )
        })
      }
    </div>
  );
};

export default Welcome;
