import { mount } from '@vue/test-utils'

import App from '../src/App.vue'

describe('Component app', () => {
  test('Snapshot de app', () => {
    expect(App).toBeTruthy()
    const wrapper = mount(App)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
