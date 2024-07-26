import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BaseLayout from "./layout/BaseLayout"
import Signup from "./pages/signup/Signup"
import Signin from "./pages/signin/SignIn"
import Home from "./pages/home/Home"



function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
