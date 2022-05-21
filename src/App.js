import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">

      <Home />
      <About />
      <Service />
      <Project/>
      <Blog/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
