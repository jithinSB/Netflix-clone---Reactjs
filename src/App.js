import React from 'react'
import NavBar from './components/NavBar/NavBar'
import "./App.css"
import {action,originals} from '././urls'
import RowPost from './components/RowPost/RowPost'
import Banner from './components/Banner/Banner'
function App() {
  return (
    <div className="App">

    <NavBar />
    <Banner/>
   <RowPost url={originals} title="Netfilx Orginals"/>
   <RowPost url={action} title="Actions" isSmall/>
    
    </div>
  )
  
}

export default App
