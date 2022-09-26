import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import {Helmet} from "react-helmet";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alok Sah</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Alok sah Portfolio" />
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
