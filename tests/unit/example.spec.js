import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'LearnHTML is an interactive tool to teach HTML to new learners. This website will provide you with the basic information about HTML'
    const wrapper = shallowMount(Home, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
