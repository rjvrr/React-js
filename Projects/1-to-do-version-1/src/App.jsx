import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
/*import Todoitem1 from "./components/Todo-item-1";
import Todoitem2 from "./components/Todo-item-2";*/
//import Todoitem from "./components/Todo-item";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk" ,
      date: "20/02/2026"
    },
    {
      name: "Complete Notes",
      date: "25/02/2026"
    }
  ];

  return (
    <center class="todo-container">
      <AppName/><AddTodo/>

      <TodoItems todoItems={todoItems}></TodoItems>

      

    </center>
  )
}

export default App;
