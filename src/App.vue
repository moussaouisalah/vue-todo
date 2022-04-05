<template>
  <h1>hello world!</h1>
  <TodoItem v-for="item in todos" :key="item.id" :todo="item" />
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Todo 1" },
        { id: 2, title: "Todo 2" },
        { id: 3, title: "Todo 3" },
      ],
    };
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
