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
    <div class="flex flex-col gap-1 w-full">
      <label for="title" class="text-gray-300">Description</label>
      <textarea
        v-model="description"
        placeholder="Enter a Description..."
        rows="3"
        class="p-2 rounded-md outline-none w-full"
      ></textarea>
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
      description: "",
    };
  },
  methods: {
    handleAddTodo() {
      if (this.title.trim() === "") {
        return;
      }
      this.$emit("add-todo", {
        title: this.title,
        description: this.description,
      });
      this.title = "";
      this.description = "";
    },
  },
};
</script>
<style></style>
