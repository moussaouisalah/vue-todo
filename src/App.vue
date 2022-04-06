<template>
  <div
    class="w-screen min-h-screen bg-gray-900 flex flex-col items-center p-10 gap-5"
  >
    <h1 class="text-2xl font-bold text-gray-50">Vue Todo</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
