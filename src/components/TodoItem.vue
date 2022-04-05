<template>
  <div>
    {{ todo.title }}
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
