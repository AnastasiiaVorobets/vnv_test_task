import './App.css';
import Header from './components/Header/Header';
import WhyUs from './components/WhyUs/WhyUs';
import Services from './components/Services/Services';
import Links from './components/Links/Links';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import BriefForm from './components/BriefForm/BriefForm';
import Question from './components/Question/Question';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="App">
      <Widget />
      <Header />
      <WhyUs />
      <Services />
      <Projects />
      <Contact />
      <BriefForm />
      <Question />
      <Links />
    </div>
  );
}

export default App;
