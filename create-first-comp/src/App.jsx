import MyButton from "./button";
import Hello from "./Hello";
import Random from "./Random";
/*we will start by writing components, they are various components in React--> functional components, class components etc*/
function App(){
  //this is not HTML, although it resembles HTML
  return <div>

    <h1> 
    Hello World
    </h1>
    <MyButton></MyButton>

    <Hello></Hello>

    <Random/>

  </div>
  
}

export default App; //same name as that of component