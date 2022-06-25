// CardUiComponent
import { mount } from '@vue/test-utils'

import CardUiComponent from '../../../src/components/ui/CardUiComponent.vue'

describe('CardUiComponent', () => {
  const title = 'Nombre de prueba'

  const wrapper = mount(CardUiComponent, {
    props: {
      title
    }
  })

  test('El titulo tiene que ser TurMicro', () => {
    expect(wrapper.find('h3').text()).toBe(title)
  })
})
