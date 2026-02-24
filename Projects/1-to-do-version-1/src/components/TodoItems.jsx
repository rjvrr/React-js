import Todoitem from "./Todo-item";

const TodoItems = ({todoItems}) => {
  return <>
    <div class="items-container">
      {todoItems.map((items) => (
        <Todoitem todoName = {items.name}  todoDate = {items.date}></Todoitem>
        ))}
      
    </div>
  </>
}

export default TodoItems;