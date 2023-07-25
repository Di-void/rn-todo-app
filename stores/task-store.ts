import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { State, Actions } from "../types/todo";
import { todos as mockTodos } from "../mock-data";

export const useTaskStore = create(
  immer<State & Actions>((set, get) => ({
    todos: mockTodos,
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
  }))
);

// this function is outside of the store because
// i don't want to create this function everytime
// the `list-item` component is re-rendered
export const removeTodoItem = (id: string) =>
  useTaskStore.setState((state) => ({
    todos: state.todos.filter((item) => item.id !== id),
  }));
