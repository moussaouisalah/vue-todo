<template>
  <div
    class="w-full max-w-xl border-2 border-gray-700 bg-gray-800 rounded-md px-5 py-2 flex items-center justify-between"
  >
    <p class="flex-1 text-gray-50 break-all">{{ todo.title }}</p>
    <button @click="$emit('delete-todo')">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  emits: ["delete-todo"],
};
</script>
<style></style>
