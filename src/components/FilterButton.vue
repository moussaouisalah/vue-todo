<template>
  <button
    @click="$emit('select')"
    :class="[
      'text-xs font-semibold px-2.5 py-0.5 rounded',
      isSelected
        ? 'bg-yellow-200 text-yellow-900'
        : 'bg-indigo-200 text-indigo-900',
    ]"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "FilterButton",
  props: ["isSelected"],
  emits: ["select"],
};
</script>
