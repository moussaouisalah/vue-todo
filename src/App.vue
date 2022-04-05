<template>
  <div
    class="w-screen min-h-screen bg-gray-900 flex flex-col items-center p-10 gap-5"
  >
    <h1 class="text-2xl font-bold text-gray-50">Vue Todo</h1>
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
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterButton from "./components/FilterButton.vue";

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.isCompleted),
  completed: (todos) => todos.filter((todo) => todo.isCompleted),
};

export default {
  name: "App",
  components: {
    TodoItem,
    AddTodo,
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
  methods: {
    addTodo({ title, description }) {
      const todo = {
        id: Math.floor(Math.random() * 100000),
        title,
        description,
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
