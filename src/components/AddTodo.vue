<template>
  <form @submit.prevent="handleAddTodo">
    <div>
      <label for="title">Title</label>
      <input type="text" v-model="title" placeholder="Enter a Title..." />
      <button>Add</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "AddTodo",
  emits: ["add-todo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    handleAddTodo() {
      this.$emit("add-todo", this.title);
      this.title = "";
    },
  },
};
</script>
<style></style>
