import { configure, addParameters, addDecorator } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import StoryRouter from 'storybook-vue-router'
import Vue from 'vue'
import Icon from 'vue-zondicons'

Vue.component('Icon', Icon)

addDecorator(StoryRouter())

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
})

configure(require.context('../../src/', true, /\.stories\.js$/), module)
