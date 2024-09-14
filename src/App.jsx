import { useState } from 'react'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
import {Home} from './components/Home'
import { Signin } from './components/Signin'
import {  Signup } from './components/Signup'
import { Buyer } from './components/Buyer'
import { SellerProfile } from './components/Seller'
import { Profile } from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/buyer'  element={<Buyer/>}/>
          <Route path='/seller'  element={<SellerProfile/>}/>
          <Route path='/_myprofile'  element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
