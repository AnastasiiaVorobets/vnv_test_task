import './App.css';
import Header from './components/Header/Header';
import WhyUs from './components/WhyUs/WhyUs';
import Services from './components/Services/Services';
import Links from './components/Links/Links';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyUs />
      <Services />
      <Projects />
      <Contact />
      <Links />
    </div>
  );
}

export default App;
