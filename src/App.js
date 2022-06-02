import About from "./Components/About";
import Footer from "./Components/Footer";
import MainArea from "./Components/MainArea";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <MainArea />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
