import { mount } from '@vue/test-utils'

import HeaderUiComponent from '../../../src/components/ui/HeaderUiComponent.vue'

describe('HeaderUiComponent', () => {
  const wrapper = mount(HeaderUiComponent)

  test('El titulo tiene que ser TurMicro', () => {
    expect(wrapper.find('h3').text()).toBe('TurMicro')
  })
})
