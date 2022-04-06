<template>
  <AddTodo @add-todo="addTodo" />
  <div class="w-full flex flex-col items-center gap-2 max-w-xl">
    <h2 class="self-start text-gray-50 font-bold text-lg">Todos</h2>
    <template v-if="todos.length > 0">
      <div class="flex gap-1 w-full">
        <FilterButton :isSelected="filter == 'all'" @select="filter = 'all'"
          >All</FilterButton
        >
        <FilterButton
          :isSelected="filter == 'active'"
          @select="filter = 'active'"
          >Active</FilterButton
        >
        <FilterButton
          :isSelected="filter == 'completed'"
          @select="filter = 'completed'"
          >Completed</FilterButton
        >
      </div>
      <TodoItem
        v-for="item in filteredTodos"
        :key="item.id"
        :todo="item"
        @delete-todo="deleteTodo(item.id)"
        @toggle-todo-status="toggleTodoStatus(item.id)"
      />
    </template>
    <p v-else class="text-gray-300 text-center">No Todos</p>
  </div>
  <div>
    <router-link
      to="/about"
      class="underline text-orange-500 hover:text-orange-600"
      >About</router-link
    >
  </div>
</template>
<script>
import TodoItem from "../components/TodoItem.vue";
import AddTodo from "../components/AddTodo.vue";
import FilterButton from "../components/FilterButton.vue";

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.isCompleted),
  completed: (todos) => todos.filter((todo) => todo.isCompleted),
};

export default {
  name: "HomeView",
  components: {
    AddTodo,
    TodoItem,
    FilterButton,
  },
  data() {
    return {
      todos: [],
      filter: "all",
    };
  },
  computed: {
    filteredTodos() {
      return filters[this.filter](this.todos);
    },
  },
  mounted() {
    this.fetchTodos();
  },

  methods: {
    async addTodo({ title, description }) {
      const todo = {
        title,
        description,
        isCompleted: false,
      };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const data = await response.json();
      this.todos.push(data);
    },
    async fetchTodos() {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      this.todos = data;
    },
    async deleteTodo(id) {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    async toggleTodoStatus(id) {
      const todo = this.todos.find((item) => item.id === id);
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: !todo.isCompleted }),
      });
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
