import { FC } from 'react';
import {Todo} from "../todos.api.ts";

export const TodoItem: FC<{
  todo: Todo;
  toggle: () => void;
}> = ({ todo, toggle }) => <div className="todo">
  <span className="title">{todo.title}</span>
  <input type="checkbox" checked={todo.completed} onChange={() => toggle()}/>
</div>