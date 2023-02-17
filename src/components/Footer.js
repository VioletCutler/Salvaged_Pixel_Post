import React from 'react'
import {Toolbar} from './'

const Footer = ({toolBarVisibility, setToolBarVisibility, changeToolBarDisplay}) => {
   
    return (
        
        <footer id='persistent-header'>
            
            <button onClick={changeToolBarDisplay}>Click for Accessibility Options</button>
        </footer>
    )
}
export default Footer