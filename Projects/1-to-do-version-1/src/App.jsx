import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todo-item-1";
import Todoitem2 from "./components/Todo-item-2";

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      
      <AddTodo/>

      <div class="items-container">
        <Todoitem1/>

        <Todoitem2/>
      </div>

    </center>
  )
}

export default App;
