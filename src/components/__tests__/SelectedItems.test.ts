import { beforeEach, describe, expect, test, vitest } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import SelectedItems from '../SelectedItems.vue'
import { createTestingPinia } from '@pinia/testing'
import { useMultiSelectStore } from '../../stores/multiSelect'

describe('SelectedItems', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(SelectedItems, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn
          })
        ]
      }
    })
  })

  test('Container must be empty initially ant show empty text', () => {
    expect(wrapper.find('#noSelectedItemsText').text()).toBe(
      'No items selected. Click arrow to open dropdown with selections'
    )
  })

  test('Click on arrow should toggle selectListIsOpen value', () => {
    const multiSelectStore = useMultiSelectStore()

    wrapper.find('.dropdown-icon').trigger('click')

    expect(multiSelectStore.selectListIsOpen).toBe(true)
  })
})
