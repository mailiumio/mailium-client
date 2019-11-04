/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
})

configure(require.context('../../src/', true, /\.stories\.js$/), module)
