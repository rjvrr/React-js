import './App.css';
import Heading from './components/clockHeading';
import Slogan from './components/clockSlogan';
import Timing from './components/currentTiming';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <center>
      <Heading/>

      <Slogan/>

      <Timing/>
      
    </center>
  )
}

export default App
