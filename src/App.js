import React,{useState} from 'react';
import { TSheet } from './features/timesheet/TSheet'
// import ContextMenu from './features/timesheet/components/ContextMenu'
import Drawer from './features/components/Drawer';
import NavBar from './features/components/NavBar';
import './App.css'




function App() {

  
  
  return (
    <div>
    <NavBar />
    <TSheet />
    <Drawer />
    </div>
        
  ); 
}

export default App;
