import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ReadMore from "../ReadMore.vue";

describe('ReadMore component', () => {
    it('render', () => {
        const wrapper = mount(ReadMore)
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.text()).toContain('Exercise Read More')
        expect(wrapper.find('button').element.textContent).toBe("Show more")
    });

    it('when show more was clicked', async () => {
        const wrapper = mount(ReadMore)
        const textSection = wrapper.get('.cut-text')
        const btn = wrapper.find('button')

        await btn.trigger('click')

        expect(textSection.attributes().class).toBe("mb-3 d-block")
        expect(btn.element.textContent).toEqual('Show less')
    });

    it('when show less was clicked', async () => {
        const wrapper = mount(ReadMore)
        const textSection = wrapper.get('.cut-text')
        const btn = wrapper.find('button')

        await btn.trigger('click')
        await btn.trigger('click')

        expect(textSection.attributes().class).toBe("mb-3 d-block cut-text")
        expect(btn.element.textContent).toEqual('Show More')
    });
});