export interface Todo {
  id: string;
  todo: string;
  complete: boolean;
}

export interface Input {
  todo: string;
  complete: boolean;
}

export type State = {
  todos: Todo[];
  activeTodos: () => Todo[];
  completedTodos: () => Todo[];
};

export type Actions = {
  setTodoStatus: (id: string) => void;
  addTodo: (payload: Todo) => void;
};
