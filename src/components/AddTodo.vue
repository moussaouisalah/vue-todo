<template>
  <form
    @submit.prevent="handleAddTodo"
    class="flex flex-col items-center w-full max-w-xl gap-2"
  >
    <div class="flex flex-col gap-1 w-full">
      <label for="title" class="text-gray-300">Title</label>
      <input
        type="text"
        v-model="title"
        placeholder="Enter a Title..."
        class="h-10 p-2 rounded-md outline-none w-full"
      />
    </div>
    <button
      class="bg-blue-400 text-gray-50 font-bold px-5 py-2 rounded-md w-max hover:bg-blue-500"
    >
      Add
    </button>
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
