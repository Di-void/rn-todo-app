import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { State, Actions } from "../types/todo";

export const useTaskStore = create(
  immer<State & Actions>((set, get) => ({
    todos: [],
    activeTodos: () => get().todos.filter((item) => item.complete === false),
    completedTodos: () => get().todos.filter((item) => item.complete === true),
    setTodoStatus: (id) =>
      set((state) => {
        state.todos = state.todos.map((item) =>
          item.id === id ? { ...item, complete: !item.complete } : item
        );
      }),
    addTodo: (payload) =>
      set((state) => {
        state.todos = [payload, ...state.todos];
      }),
    clearCompletedTodos: () =>
      set((state) => {
        state.todos = state.todos.filter((item) => !item.complete);
      }),
    activeAndTextFormat: () => {
      const length = get().activeTodos().length;
      const textFormat = length === 0 || length > 1 ? `items` : `item`;
      return { itemsLeft: length, "text-format": textFormat };
    },
  }))
);

// this function is outside of the store because
// i don't want to create this function everytime
// the `list-item` component is re-rendered - (for the heck of it)
export const removeTodoItem = (id: string) =>
  useTaskStore.setState((state) => ({
    todos: state.todos.filter((item) => item.id !== id),
  }));
