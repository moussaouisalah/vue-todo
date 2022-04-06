<template>
  <AddTodo @add-todo="addTodo" />
  <div class="w-full flex flex-col items-center gap-2 max-w-xl">
    <h2 class="self-start text-gray-50 font-bold text-lg">Todos</h2>
    <div v-if="isLoading">
      <svg
        role="status"
        class="w-8 h-8 animate-spin text-gray-600 fill-yellow-400"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
    <template v-else>
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
    </template>
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
      isLoading: true,
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
      this.isLoading = false;
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
