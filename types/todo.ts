export interface Todo {
  id: string;
  todo: string;
  complete: boolean;
}

export type State = {
  todos: Todo[];
};

export type Actions = {
  setTodoStatus: (id: string) => void;
};
