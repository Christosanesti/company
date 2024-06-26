import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"



const App = () => {
  return <div>
    
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>

    <section id="Services">
      <Parallax />
    </section>

    <section id="About">
      <Services />
    </section>

   

    <section id="Contact">
      <Contact />
      
    </section>


    
  </div>;
};

export default App;
