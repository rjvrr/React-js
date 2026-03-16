import React from "react";
import './App.css';
import FoodItems from './components/foodItems';
import Container from "./components/container";

function App() {
  let foods = ["Roti" , "Dal" , "Green vegetable" , "Fruits" , "Salad"];
  //normally div k andar wrap krna padta tha, usse DOM pe ek extra div ajata tha so to resolve that we have Fragments or simply <> </>
  return (
    /*<> 
      <h1> Healthy Food </h1>
        <ul class="list-group">
          <li class="list-group-item">Roti</li>
          <li class="list-group-item">Dal</li>
          <li class="list-group-item">Green vegetable</li>
          <li class="list-group-item">Fruits</li>
          <li class="list-group-item">Salad</li>
        </ul>
    </>*/
    
    /*<React.Fragment> 
      <h1> Healthy Food </h1>

      <FoodItems food={foods}> </FoodItems>
        
    </React.Fragment>*/

    
      /*<>
        <h1> Healthy Food </h1>
          <ul class="list-group">
            <li class="list-group-item">Roti</li>
            <li class="list-group-item">Dal</li>
            <li class="list-group-item">Green vegetable</li>
            <li class="list-group-item">Fruits</li>
            <li class="list-group-item">Salad</li>
          </ul>
      </>*/
      /*<React.Fragment>
        <h1> Healthy Food </h1>
      
        <FoodItems food={foods}> </FoodItems>
          
      </React.Fragment>*/
      <>
        <Container>
          <h1> Healthy Food </h1>

          <FoodItems food={foods}> </FoodItems>

        </Container>
        
        <Container> 
          Above is the list of healthy foods that one should eat daily.
        </Container>
      </>
  )
}

export default App;
