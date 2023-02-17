import './Accessibility_Toolbar.css'

const Toolbar = ({ changeToolbarDisplay}) => {

  return (
    <div id='toolbar-container' onClick={changeToolbarDisplay}>
      <div id='toolbar-modal-backdrop' onClick={changeToolbarDisplay}></div>
       <div id="toolbar">
        <h2 id='accessibility-header'>Accessibility Toolbar</h2>
        <p id='increase-text'>Increase Text Size</p>
        <button>+ Increase Text Size</button>
        <p id='decrease-text'>Decrease Text Size</p>
        <button>- Decrease Text Size</button>
        <p id='high-contrast'>High Contrast</p>
        <button>High Contrast</button>
        <p id="negative-contrast">Negative Contrast</p>
        <button>Negative Contrast</button>
        <p id="grayscale">Grayscale</p>
        <button>Grayscale</button>
      </div>
    </div>
  );
};

export default Toolbar;
