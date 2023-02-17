import React from 'react'
import {Toolbar} from './'

const Footer = ({toolbarVisibility, setToolbarVisibility}) => {
    function changeToolbarDisplay() {
        console.log('Change Tool Bar Display :', !toolbarVisibility)
        setToolbarVisibility(!toolbarVisibility);
      }
    return (
        
        <footer id='persistent-header'>
            {toolbarVisibility ? <Toolbar changeToolbarDisplay={changeToolbarDisplay}/> : null}
            <button onClick={changeToolbarDisplay}>Click for Accessibility Options</button>
        </footer>
    )
}
export default Footer