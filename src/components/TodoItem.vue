<template>
  <div>
    {{ todo.title }}
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
};
</script>
<style></style>
