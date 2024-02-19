import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
// import Background from './Background'
// import Buddy from './Buddy'
import Signup from "./Signup"
import Login from "./Login"
import Component from "./Component"
// import Buddy from "./Buddy"
// import Background from "./Background"
function App() {

  return (
    <>
   
    <BrowserRouter>
    {/* <Buddy></Buddy> */}
    {/* <Background></Background> */}
    <Routes>
      <Route path="/" element={<Component/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
