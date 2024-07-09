<script setup lang="ts">
import { useMultiSelectStore } from '@/stores/multiSelect'

const multiSelectStore = useMultiSelectStore()
</script>

<template>
  <ul v-if="multiSelectStore.selectListIsOpen" class="list-group">
    <li
      v-for="item in multiSelectStore.listItems.sort((a, b) => a.id - b.id)"
      :key="item.id"
      class="list-group-item"
      @click="multiSelectStore.itemClickHandler(item.id)"
    >
      {{ item.value }}
    </li>
  </ul>
</template>

<style scoped>
.list-group {
  cursor: pointer;
  margin-bottom: 20px;

  :hover {
    background-color: #ccc;
  }
}
</style>
