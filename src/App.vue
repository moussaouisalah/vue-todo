<template>
  <AddTodo @add-todo="addTodo" />
  <TodoItem
    v-for="item in todos"
    :key="item.id"
    :todo="item"
    @delete-todo="deleteTodo(item.id)"
  />
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
      };
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
