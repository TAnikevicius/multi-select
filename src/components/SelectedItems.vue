<script setup lang="ts">
import { useMultiSelectStore } from '@/stores/multiSelect'

const multiSelectStore = useMultiSelectStore()
</script>

<template>
  <div class="selected-items">
    <div>
      <span id="noSelectedItemsText" v-if="multiSelectStore.selectedItems.length === 0"
        >No items selected. Click arrow to open dropdown with selections</span
      >
      <div
        class="selected-item"
        v-for="selectedItem in multiSelectStore.selectedItems"
        :key="selectedItem.id"
      >
        <span class="badge text-bg-primary">
          {{ selectedItem.value }}
        </span>
        <i
          class="bi bi-x-circle-fill delete-item-icon"
          @click="multiSelectStore.deleteSelectedItem(selectedItem.id)"
        ></i>
      </div>
    </div>
    <i
      class="bi bi-caret-down-fill dropdown-icon"
      :style="multiSelectStore.selectListIsOpen ? 'transform: rotate(180deg)' : ''"
      @click="multiSelectStore.selectListIsOpen = !multiSelectStore.selectListIsOpen"
    ></i>
  </div>
</template>

<style scoped>
.selected-items {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  .selected-item {
    display: inline;
    position: relative;

    span {
      margin-right: 10px;
    }

    i.delete-item-icon {
      display: none;
      color: red;
      position: absolute;
      left: -7px;
      top: -10px;
      cursor: pointer;
    }
  }

  .selected-item:hover {
    i.delete-item-icon {
      display: block;
    }
  }

  i.dropdown-icon {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
