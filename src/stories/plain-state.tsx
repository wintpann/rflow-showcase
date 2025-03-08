import { FC, useState } from 'react';
import { Layout } from '../ui/layout.tsx';
import { Input } from '../ui/input.tsx';
import { todos } from '../todos.api.ts';
import { TodoItem } from '../ui/todo-item.tsx';

export const PlainState: FC = () => {
  const [inputText, setInputText] = useState('');

  return (
    <Layout>
      <Input value={inputText} onChange={setInputText} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggle={() => {}} />
      ))}
    </Layout>
  );
};
