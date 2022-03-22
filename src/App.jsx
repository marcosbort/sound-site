import "./App.css";
import "antd/dist/antd.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Equipment } from "./components/Equipment";
import { Video } from "./components/Video";
import { Prices } from "./components/Prices";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Equipment />
      <Video />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
