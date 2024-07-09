import { beforeEach, describe, test, vitest } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ListItems from '../ListItems.vue'

describe('ListItems', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(ListItems, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn
          })
        ]
      }
    })
  })

  test('test', () => {})
})
