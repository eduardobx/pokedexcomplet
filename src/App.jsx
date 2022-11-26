
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Character from './components/Character'
import NameCharacter from './components/NameCharacter'
import ProtectedRoutes from './components/ProtecRoute'
import TrainerName from './components/TrainerName'
import pokedex from   "./assets/pokedex.png"

function App() {
 

  return (
   < HashRouter>
   <div className='conteiner-position'>
    <div className='position'> </div> <br />
    <div className='position2'></div>
     <img className='img-position' src={pokedex} alt="" />
    </div>
    <Routes>
     <Route  path='/' element={<TrainerName/>} />
     <Route element={<ProtectedRoutes/>}>
     <Route path='/character' element={<Character/>}  />
     <Route path='/character/:name' element={<NameCharacter/>}  />
     </Route>
    </Routes>
   </HashRouter>
  )
}

export default App
