// ViejesDisponiblesAppComponent

import { mount } from '@vue/test-utils'

import ViejesDisponiblesAppComponent from '../../../src/components/app/ViejesDisponiblesAppComponent.vue'

describe('ViejesDisponiblesAppComponent', () => {
  const wrapper = mount(ViejesDisponiblesAppComponent)

  test('Snapshot de ViejesDisponiblesAppComponent', () => {
    expect(ViejesDisponiblesAppComponent).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('El titulo tiene que ser Puntos acomulados', () => {
    expect(wrapper.find('h3').text()).toBe('Viajes disponibles')
  })
})
