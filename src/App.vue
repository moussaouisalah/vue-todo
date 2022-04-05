<template>
  <div
    class="w-screen min-h-screen bg-gray-900 flex flex-col items-center p-10 gap-5"
  >
    <h1 class="text-2xl font-bold text-gray-50">Vue Todo</h1>
    <AddTodo @add-todo="addTodo" />
    <div class="w-full flex flex-col items-center gap-2 max-w-xl">
      <h2 class="self-start text-gray-50 font-bold text-lg">Todos</h2>
      <TodoItem
        v-for="item in todos"
        :key="item.id"
        :todo="item"
        @delete-todo="deleteTodo(item.id)"
        @toggle-todo-status="toggleTodoStatus(item.id)"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "App",
  components: {
    TodoItem,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(title) {
      const todo = {
        id: Math.floor(Math.random() * 100000),
        title,
        isCompleted: false,
      };
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    toggleTodoStatus(id) {
      this.todos = this.todos.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    },
  },
};
</script>
