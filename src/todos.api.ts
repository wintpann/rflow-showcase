export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const todos: Todo[] = [
  'купить продукты',
  'сходить к стоматологу',
  'заняться йогой',
  'забрать машину с автосервиса',
  'навестить друзей',
  'написать песню',
  'открыть бизнес',
  'научиться рисовать',
  'убраться в квартире',
  'изучить фронтенд',
  'послушать музыку',
  'выбросить мусор',
  'прогуляться',
  'удалить соцсети',
  'потанцевать',
  'проверить пайплайн',
  'написать картину',
  'купить новые кроссовки',
  'покрасить забор',
  'выиграть в лотерею',
].map((title, index) => ({ id: index + 1, title, completed: false }));

export const TodoApi = {
  toggle: (id: number, completed: boolean) =>
    new Promise((resolve) =>
      setTimeout(() => {
        for (const todo of todos) {
          if (todo.id === id) {
            todo.completed = completed;
            return;
          }
        }
        resolve();
      }, 3000),
    ),
  getByIds: (ids: number[], signal?: AbortSignal) =>
    new Promise((resolve) => {
      const timeout = setTimeout(
        () => resolve(todos.filter((todo) => ids.includes(todo.id))),
        3000,
      );
      signal?.addEventListener('abort', () => {
        clearTimeout(timeout);
        console.log('[REQUEST ABORTED] getTodosById');
      });
    }),
  getByTitles: (titles: string[], signal?: AbortSignal) =>
    new Promise((resolve) => {
      const timeout = setTimeout(
        () =>
          resolve(
            todos.filter((todo) =>
              titles.some((title) =>
                todo.title.toLowerCase().includes(title.toLowerCase()),
              ),
            ),
          ),
        3000,
      );
      signal?.addEventListener('abort', () => {
        clearTimeout(timeout);
        console.log('[REQUEST ABORTED] getTodosByTitle');
      });
    }),
};
