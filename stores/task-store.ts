import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { State, Actions } from "../types/todo";
import { todos as mockTodos } from "../mock-data";

export const useTaskStore = create(
  immer<State & Actions>((set) => ({
    todos: mockTodos,
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
  }))
);
