<template>
  <div
    class="w-full max-w-xl border-2 border-gray-700 bg-gray-800 rounded-md px-5 py-2 flex items-center justify-between gap-2"
  >
    <p class="flex-1 text-gray-50 break-all">{{ todo.title }}</p>
    <div>
      <button
        @click="$emit('toggle-todo-status')"
        class="cursor-pointer p-2 rounded-md hover:text-white transition-all"
        :class="{
          'text-orange-500 hover:bg-orange-500': todo.isCompleted,
          'text-green-500 hover:bg-green-500': !todo.isCompleted,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          v-if="todo.isCompleted"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          v-if="!todo.isCompleted"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <button
        @click="$emit('delete-todo')"
        class="cursor-pointer p-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  emits: ["delete-todo", "toggle-todo-status"],
};
</script>
<style></style>
