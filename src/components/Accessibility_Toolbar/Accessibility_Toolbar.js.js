import './Accessibility_Toolbar.css'

const Toolbar = ({ changeToolBarDisplay, theme, setTheme, fontSize, setFontSize }) => {

    function handleGrayScale(){
      setTheme('gray-scale')
    }

    function handleLightMode(){
      setTheme('light-mode')
    }

    function handleIncreaseTextSize(){
      console.log(fontSize.slice(-1))
      let currentFontSize = fontSize.slice(-1)
      if (currentFontSize < 6) {
        currentFontSize++
      }
      setFontSize(`font-size-${currentFontSize}`)
    }

    function handleIncreaseTextSize(){
      console.log(fontSize.slice(-1))
      let currentFontSize = fontSize.slice(-1)
      console.log('current font size :', currentFontSize)
      if (currentFontSize < 5) {
        currentFontSize++
      }
      setFontSize(`font-size-${currentFontSize}`)
    }

    function handleDecreaseTextSize(){
      console.log(fontSize.slice(-1))
      let currentFontSize = fontSize.slice(-1)
      if (currentFontSize > 1) {
        currentFontSize--
      }
      setFontSize(`font-size-${currentFontSize}`)
    }

  return (
    <div id='toolbar-container'>
      <div id='toolbar-modal-backdrop' onClick={changeToolBarDisplay}></div>
       <div id="toolbar">
        <p id='increase-text' onClick={handleIncreaseTextSize}>Increase Text Size</p>
        <p id='decrease-text' onClick={(handleDecreaseTextSize)}>Decrease Text Size</p>
        <p id='high-contrast'>High Contrast</p>
        <p id="negative-contrast">Negative Contrast</p>
        <p id="grayscale" onClick={handleGrayScale}>Grayscale</p>
        <p id="grayscale"  onClick={handleLightMode}>Light Mode</p>
      </div>
    </div>
  );
};

export default Toolbar;
