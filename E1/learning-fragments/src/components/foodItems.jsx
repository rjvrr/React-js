import Item from "./Item";

const FoodItems = ({food}) => {
  return ( <ul className="list-group">
    {
    food.map( (items) => 
      <Item key = {items} foodItemname = {items}> </Item> )
    }
  </ul> )

}

export default FoodItems;