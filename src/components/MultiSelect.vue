<script setup lang="ts">
import SelectedItems from '@/components/SelectedItems.vue'
import ListItems from '@/components/ListItems.vue'
</script>

<template>
  <div class="multi-select">
    <SelectedItems />
    <ListItems />
  </div>
</template>

<style scoped>
.multi-select {
  margin-top: 50px;
  border: 1px solid #ccc;
  padding: 0 20px;
  border-radius: 10px;
}
</style>
