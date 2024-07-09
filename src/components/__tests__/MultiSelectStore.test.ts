import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMultiSelectStore } from '../../stores/multiSelect'

describe('MultiSelectStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('listItems is not empty initially', () => {
    const multiSelectStore = useMultiSelectStore()

    expect(multiSelectStore.listItems).not.empty
  })

  test('selectedItems is empty initially', () => {
    const multiSelectStore = useMultiSelectStore()

    expect(multiSelectStore.selectedItems).toStrictEqual([])
  })

  test('selectListIsOpen is false initially', () => {
    const multiSelectStore = useMultiSelectStore()

    expect(multiSelectStore.selectListIsOpen).toBe(false)
  })

  test('itemClickHandler should remove item from listItems and add it to selectedItems by given id', () => {
    const multiSelectStore = useMultiSelectStore()
    const id = 3

    multiSelectStore.itemClickHandler(id)

    expect(multiSelectStore.listItems).toStrictEqual(
      multiSelectStore.listItems.filter((item) => item.id !== id)
    )

    expect(multiSelectStore.selectedItems).toStrictEqual([
      multiSelectStore.selectedItems.find((item) => item.id === id)
    ])
  })

  test('deleteSelectedItem should remove item from selectedItems and add it to listItems  by given id', () => {
    const multiSelectStore = useMultiSelectStore()
    const id = 3

    // Just add several items to selectedItems array
    multiSelectStore.itemClickHandler(1)
    multiSelectStore.itemClickHandler(2)
    multiSelectStore.itemClickHandler(3)

    multiSelectStore.deleteSelectedItem(id)

    expect(multiSelectStore.listItems).contain(
      multiSelectStore.listItems.find((item) => item.id === id)
    )

    expect(multiSelectStore.selectedItems).not.contain([
      multiSelectStore.selectedItems.find((item) => item.id === id)
    ])
  })
})
