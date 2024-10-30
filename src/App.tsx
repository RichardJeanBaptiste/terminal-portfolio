import { useState, useEffect } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import Prompt from './components/prompt';
import './App.css'

let resizeTimeout: number | undefined;

function App() {
  

  const [ innerWidth, SetInnerWidth ] = useState(0);
  const [ innerHeight, SetInnerHeight ] = useState(0);

  const updateSize = () => {
    SetInnerWidth(window.innerWidth);
    SetInnerHeight(window.innerHeight);
  }

  useEffect(() => {

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSize();
      }, 300); // Adjust the timeout as needed (300ms here)
    };

    updateSize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout); // Clean up timeout on unmount
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  },[]);
 
  return (
    <div className='h-screen w-screen text-white' style={{
      backgroundColor: 'rgb(0, 0, 0)'
    }}>
      <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '4%', backgroundColor: 'rgb(50, 50, 52)'}}>
        <p className='text-center w-full'>Richard Jean-Baptiste--Portfolio-{innerWidth} x {innerHeight}</p>
        <p className='text-right' style={{marginRight: '1%', marginTop: '.25%'}}><IoSettingsOutline  color='white'/></p>    
      </div>

      {/** Terminal Prompt */}
      <Prompt/>
      
    </div>
  )
}

export default App
