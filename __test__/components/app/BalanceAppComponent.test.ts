import { mount } from '@vue/test-utils'

import BalanceAppComponent from '../../../src/components/app/BalanceAppComponent.vue'

describe('BalanceAppComponent', () => {
  const wrapper = mount(BalanceAppComponent)

  test('Snapshot de BalanceAppComponent', () => {
    expect(BalanceAppComponent).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('El titulo tiene que ser Balance', () => {
    expect(wrapper.find('h3').text()).toBe('Balance')
  })
})
