import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from './Components/Content'
const Home = () => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
)
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App
