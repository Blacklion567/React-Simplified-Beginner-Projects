import { useContext } from 'react';
import { TodoContext } from './Section15';
import { TodoItem } from './TodoItem';

export function TodoList() {
   const { todos } = useContext(TodoContext);

   return (
      <ul id="list">
         {todos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} />;
         })}
      </ul>
   );
}
