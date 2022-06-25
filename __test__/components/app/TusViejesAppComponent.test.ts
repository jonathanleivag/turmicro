// TusViejesAppComponent

import { mount } from '@vue/test-utils'

import TusViejesAppComponent from '../../../src/components/app/TusViejesAppComponent.vue'

describe('TusViejesAppComponent', () => {
  const wrapper = mount(TusViejesAppComponent)

  test('Snapshot de TusViejesAppComponent', () => {
    expect(TusViejesAppComponent).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('El titulo tiene que ser Tus viejes', () => {
    expect(wrapper.find('h3').text()).toBe('Tus viejes')
  })
})
