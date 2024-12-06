import Layout from "./HOC/layout";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Instructor from "./Pages/Instructor";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Page from "./Pages/Page";
import Process from "./Pages/Process";

function App() {
  return (
    <>
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/page" element={<Page />} />
          <Route path="/process" element={<Process />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
