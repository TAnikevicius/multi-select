import { defineStore } from 'pinia'

export interface ListItem {
  id: number
  value: string
}

export const useMultiSelectStore = defineStore({
  id: 'multiSelect',
  state: () => ({
    listItems: [
      {
        id: 1,
        value: 'A first item'
      },
      {
        id: 2,
        value: 'A second item'
      },
      {
        id: 3,
        value: 'A third item'
      },
      {
        id: 4,
        value: 'A fourth item'
      },
      {
        id: 5,
        value: 'A fifth item'
      },
      {
        id: 6,
        value: 'A sixth item'
      },
      {
        id: 7,
        value: 'A seventh item'
      },
      {
        id: 8,
        value: 'And a eight one'
      }
    ] as ListItem[],
    selectedItems: [] as ListItem[],
    selectListIsOpen: false
  }),
  actions: {
    itemClickHandler(itemId: number) {
      const selectedItem = this.listItems.find((item) => itemId === item.id)

      selectedItem && this.selectedItems.push(selectedItem)

      this.listItems = this.listItems.filter((item) => item.id !== itemId)
    },
    deleteSelectedItem(itemId: number) {
      const itemToDelete = this.selectedItems.find((item) => itemId === item.id)

      itemToDelete && this.listItems.push(itemToDelete)

      this.selectedItems = this.selectedItems.filter((item) => item.id !== itemId)
    }
  },
  getters: {}
})
