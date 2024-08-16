import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import Body from "./pages/body/Body";
import ResumeTemplates2 from "./pages/resume/ResumeTemplates2";
import ResumeTemplates4 from "./pages/resume/ResumeTemplates4";
import ResumeTemplates3 from "./pages/resume/ResumeTemplates3";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/resume" element={<Body />} />

            <Route path="/resume2" element={<ResumeTemplates2 />} />
            <Route path="/resume3" element={<ResumeTemplates3 />} />
            <Route path="/resume4" element={<ResumeTemplates4 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
