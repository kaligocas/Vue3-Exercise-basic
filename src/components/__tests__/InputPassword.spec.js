import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import InputPassword from '../InputPassword.vue'

describe('InputPassword', () => {

    it('component exist', () => {
        const wrapper = mount(InputPassword)
        expect(wrapper.classes('input-password')).toBe(true)
        expect(wrapper.find('input').exists()).toBe(true)
        expect(wrapper.find('input').element.id).toBe('password')
        expect(wrapper.text()).toContain("Exercise Input Password")

        expect(wrapper.find('#show-password').element.id).toBe('show-password')
    })

    it('click in show password', async () => {
        const wrapper = mount(InputPassword)
        console.log(wrapper)
        await wrapper.find('input[type="password"]').setValue('1234')
        await wrapper.find('span').trigger('click')

        expect(wrapper.find('input').element.id).toBe('password')
        expect(wrapper.find('input').element.type).toBe('text')
    });

});

