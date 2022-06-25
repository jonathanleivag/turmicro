import { mount } from '@vue/test-utils'

import PuntosAcomuladosAppComponent from '../../../src/components/app/PuntosAcomuladosAppComponent.vue'

describe('PuntosAcomuladosAppComponent', () => {
  const wrapper = mount(PuntosAcomuladosAppComponent)

  test('Snapshot de PuntosAcomuladosAppComponent', () => {
    expect(PuntosAcomuladosAppComponent).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('El titulo tiene que ser Puntos acomulados', () => {
    expect(wrapper.find('h3').text()).toBe('Puntos acomulados')
  })
})
